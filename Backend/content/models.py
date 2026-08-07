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
    image = models.ImageField(upload_to='posts/', blank=True, null=True)
    type = models.CharField(max_length=10, choices=TYPE_CHOICES, default='news')
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "News & Notice"
        verbose_name_plural = "News & Notices"


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


class PopupAnnouncement(models.Model):
    badge_text = models.CharField(max_length=50, default='ADMISSION OPEN', help_text="Small top badge tag (e.g. ADMISSION OPEN)")
    title = models.CharField(max_length=255, default='April Session 2027', help_text="Main heading title")
    description = models.TextField(
        default="Secure your spot in many of Japan's top language schools and colleges.",
        help_text="Detailed modal message"
    )
    highlight_text = models.CharField(
        max_length=255,
        default='Apply now for Student Visa!',
        blank=True,
        help_text="Highlighted text line"
    )
    button_text = models.CharField(max_length=100, default='Start Application', help_text="Call to Action button label")
    button_link = models.CharField(max_length=255, default='/contact', help_text="URL link for the button (e.g. /contact)")
    image = models.ImageField(upload_to='popups/', blank=True, null=True, help_text="Optional popup banner image")
    is_active = models.BooleanField(default=True, help_text="Only active popup announcement will be displayed on website")
    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-updated_at']
        verbose_name = "Popup Announcement"
        verbose_name_plural = "Popup Announcements"

    def __str__(self):
        status = "Active" if self.is_active else "Inactive"
        return f"{self.title} ({status})"


class GalleryAlbum(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)
    cover_image = models.ImageField(
        upload_to='gallery/covers/',
        blank=True,
        null=True,
        help_text="Cover photo (falls back to first album photo if empty)"
    )
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Gallery Album"
        verbose_name_plural = "Gallery Albums"

    def __str__(self):
        return self.title

    @property
    def get_cover_image_url(self):
        if self.cover_image:
            return self.cover_image.url
        first_photo = self.photos.first()
        if first_photo and first_photo.image:
            return first_photo.image.url
        return None


class GalleryPhoto(models.Model):
    album = models.ForeignKey(GalleryAlbum, on_delete=models.CASCADE, related_name='photos')
    image = models.ImageField(upload_to='gallery/photos/')
    caption = models.CharField(max_length=255, blank=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', 'created_at']
        verbose_name = "Gallery Photo"
        verbose_name_plural = "Gallery Photos"

    def __str__(self):
        return f"Photo for {self.album.title}"


