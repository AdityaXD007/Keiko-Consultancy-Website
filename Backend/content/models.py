import bleach
from django.db import models

class Post(models.Model):
    TYPE_CHOICES = [
        ('news', 'News'),
        ('notice', 'Notice'),
    ]

    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    content = models.TextField()
    type = models.CharField(max_length=10, choices=TYPE_CHOICES, default='news')
    is_published = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title

    def _sanitize_content(self):
        # Sanitize HTML content with explicit tag, attribute, and protocol allowlists.
        if self.content:
            allowed_tags = [
                'p', 'b', 'i', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                'ul', 'ol', 'li', 'a', 'br', 'blockquote', 'code', 'pre', 'hr'
            ]
            allowed_attributes = {
                'a': ['href', 'title', 'target', 'rel'],
            }
            allowed_protocols = ['http', 'https', 'mailto']
            
            self.content = bleach.clean(
                self.content,
                tags=allowed_tags,
                attributes=allowed_attributes,
                protocols=allowed_protocols,
                strip=True
            )

    def clean(self):
        super().clean()
        self._sanitize_content()

    def save(self, *args, **kwargs):
        self._sanitize_content()
        super().save(*args, **kwargs)
