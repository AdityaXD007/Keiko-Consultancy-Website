from django.test import TestCase, override_settings
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import Post

@override_settings(ALLOWED_HOSTS=['testserver'], SECURE_SSL_REDIRECT=False)
class PostAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.published_news_featured = Post.objects.create(
            title="Autumn 2026 Japanese Language Intake",
            slug="autumn-2026-japanese-language-intake",
            content="Admission is now open for the Autumn 2026 JLPT and NAT-TEST prep classes at Yokohama Consultancy.",
            type="news",
            is_published=True,
            is_featured=True,
        )
        self.published_news_unfeatured = Post.objects.create(
            title="General News Announcement",
            slug="general-news-announcement",
            content="General news update regarding consultancy opening hours.",
            type="news",
            is_published=True,
            is_featured=False,
        )
        self.published_notice_featured = Post.objects.create(
            title="Urgent Admission Notice",
            slug="urgent-admission-notice",
            content="Urgent notice regarding intake document submission deadline.",
            type="notice",
            is_published=True,
            is_featured=True,
        )
        self.published_notice_unfeatured = Post.objects.create(
            title="Holiday Notice - Dashain Festival",
            slug="holiday-notice-dashain-festival",
            content="Our office will remain closed during the Dashain festival holidays.",
            type="notice",
            is_published=True,
            is_featured=False,
        )
        self.unpublished_news_featured = Post.objects.create(
            title="Draft Featured Scholarship Program",
            slug="draft-featured-scholarship-program",
            content="Draft details regarding Yokohama student visa assistance.",
            type="news",
            is_published=False,
            is_featured=True,
        )

    def test_list_published_posts_with_pagination(self):
        url = reverse('post-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 4)
        self.assertEqual(len(response.data['results']), 4)

    def test_filter_posts_by_type_news(self):
        url = reverse('post-list')
        response = self.client.get(url, {'type': 'news'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 2)

    def test_filter_posts_by_featured_valid_values(self):
        url = reverse('post-list')
        # Test ?featured=true
        res1 = self.client.get(url, {'featured': 'true'})
        self.assertEqual(res1.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res1.data['results']), 2)

        # Test ?featured=1
        res2 = self.client.get(url, {'featured': '1'})
        self.assertEqual(res2.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res2.data['results']), 2)

        # Test ?featured=false
        res3 = self.client.get(url, {'featured': 'false'})
        self.assertEqual(res3.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res3.data['results']), 2)

    def test_filter_posts_by_invalid_featured_param_returns_400(self):
        url = reverse('post-list')
        response = self.client.get(url, {'featured': 'flase'})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('featured', response.data)

    def test_chained_filter_type_and_featured(self):
        url = reverse('post-list')
        # Filter ?type=news&featured=true should return exactly 1 post
        response = self.client.get(url, {'type': 'news', 'featured': 'true'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 1)
        self.assertEqual(response.data['results'][0]['slug'], 'autumn-2026-japanese-language-intake')

    def test_unpublished_featured_post_never_leaks(self):
        # Even though self.unpublished_news_featured has is_featured=True, it must NOT appear
        url = reverse('post-list')
        response = self.client.get(url, {'featured': 'true'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        slugs = [p['slug'] for p in response.data['results']]
        self.assertNotIn('draft-featured-scholarship-program', slugs)

    def test_invalid_type_query_param_returns_400(self):
        url = reverse('post-list')
        response = self.client.get(url, {'type': 'invalid_type'})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('type', response.data)

    def test_type_param_case_and_whitespace_normalization(self):
        # Fix #1: ?type=News, ?type= news  should resolve the same as ?type=news
        url = reverse('post-list')
        res_upper = self.client.get(url, {'type': 'News'})
        self.assertEqual(res_upper.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res_upper.data['results']), 2)

        res_padded = self.client.get(url, {'type': ' news '})
        self.assertEqual(res_padded.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res_padded.data['results']), 2)

    def test_empty_type_param_treated_as_absent(self):
        # Fix #2: ?type= (empty string) should return all published posts, not a 400
        url = reverse('post-list')
        response = self.client.get(url, {'type': ''})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 4)

    def test_empty_featured_param_treated_as_absent(self):
        # Fix #2: ?featured= (empty string) should return all published posts, not a 400
        url = reverse('post-list')
        response = self.client.get(url, {'featured': ''})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 4)

    def test_get_published_post_detail_public_fields_only(self):
        url = reverse('post-detail', kwargs={'slug': 'autumn-2026-japanese-language-intake'})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], 'Autumn 2026 Japanese Language Intake')
        self.assertTrue(response.data['is_featured'])
        self.assertNotIn('is_published', response.data)

    def test_get_unpublished_post_detail_returns_404(self):
        url = reverse('post-detail', kwargs={'slug': 'draft-featured-scholarship-program'})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_stored_xss_sanitizes_script_tags(self):
        post = Post.objects.create(
            title="XSS Test Post",
            slug="xss-test-post",
            content="<script>alert('xss');</script><p>Japanese Language Class Details</p>",
            type="news",
            is_published=True,
        )
        self.assertNotIn('<script>', post.content)
        self.assertIn('<p>Japanese Language Class Details</p>', post.content)
