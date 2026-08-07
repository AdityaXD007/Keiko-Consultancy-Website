from datetime import timedelta
from django.utils import timezone
from django.contrib import admin
from django.contrib.auth.models import User, Group
from unfold.admin import ModelAdmin, TabularInline
from .models import Post, PopupAnnouncement, GalleryAlbum, GalleryPhoto

# Configure Admin header & "View site" redirect URL
admin.site.site_url = 'https://www.yokohama.edu.np/'
admin.site.site_header = 'Yokohama Consultancy Admin'
admin.site.site_title = 'Yokohama Admin'

# Unregister default Auth models (Users & Groups) to keep Admin sidebar clean
admin.site.unregister(User)
admin.site.unregister(Group)

@admin.register(Post)
class PostAdmin(ModelAdmin):
    list_display = ('title', 'type', 'is_published', 'status', 'created_at')
    list_filter = ('type', 'is_published')
    prepopulated_fields = {'slug': ('title',)}

    def status(self, obj):
        if not obj.is_published:
            return "Unpublished"
        cutoff = timezone.now() - timedelta(days=60)
        if obj.created_at >= cutoff:
            return "Active (Visible)"
        return "Expired (>60 days)"
    status.short_description = "Visibility Status"


@admin.register(PopupAnnouncement)
class PopupAnnouncementAdmin(ModelAdmin):
    list_display = ('title', 'badge_text', 'is_active', 'updated_at')
    list_filter = ('is_active',)
    search_fields = ('title', 'badge_text', 'description')

class GalleryPhotoInline(TabularInline):
    model = GalleryPhoto
    extra = 1
    fields = ('image', 'caption', 'order')

@admin.register(GalleryAlbum)
class GalleryAlbumAdmin(ModelAdmin):
    list_display = ('title', 'photo_count', 'is_published', 'created_at')
    list_filter = ('is_published',)
    search_fields = ('title', 'description')
    prepopulated_fields = {'slug': ('title',)}
    inlines = [GalleryPhotoInline]

    def photo_count(self, obj):
        return obj.photos.count()
    photo_count.short_description = "Photos"



