from datetime import timedelta
from django.utils import timezone
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from .models import Post, PopupAnnouncement, GalleryAlbum
from .serializers import PostPublicSerializer, PopupAnnouncementSerializer, GalleryAlbumSerializer

def get_active_posts_queryset():
    """
    Returns published posts created within the last 60 days.
    Posts older than 60 days automatically disappear from public view.
    """
    cutoff_date = timezone.now() - timedelta(days=60)
    return Post.objects.filter(is_published=True, created_at__gte=cutoff_date)

class PostListView(ListAPIView):
    serializer_class = PostPublicSerializer

    def get_queryset(self):
        # Base queryset strictly filters published posts within 60-day window.
        queryset = get_active_posts_queryset()
        
        post_type = self.request.query_params.get('type')
        if post_type:
            post_type = post_type.strip().lower()
            valid_types = [choice[0] for choice in Post.TYPE_CHOICES]
            if post_type not in valid_types:
                raise ValidationError({
                    "type": f"Invalid type '{post_type}'. Must be one of: {', '.join(valid_types)}."
                })
            queryset = queryset.filter(type=post_type)

        return queryset

class PostDetailView(RetrieveAPIView):
    serializer_class = PostPublicSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        return get_active_posts_queryset()


class PopupAnnouncementView(APIView):
    """
    Returns the latest active popup announcement, or null if none is active.
    """
    def get(self, request, *args, **kwargs):
        active_popup = PopupAnnouncement.objects.filter(is_active=True).first()
        if active_popup:
            serializer = PopupAnnouncementSerializer(active_popup)
            return Response(serializer.data)
        return Response(None)

class GalleryAlbumListView(ListAPIView):
    serializer_class = GalleryAlbumSerializer

    def get_queryset(self):
        return GalleryAlbum.objects.filter(is_published=True).prefetch_related('photos')

class GalleryAlbumDetailView(RetrieveAPIView):
    serializer_class = GalleryAlbumSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        return GalleryAlbum.objects.filter(is_published=True).prefetch_related('photos')


