from rest_framework import serializers
from .models import Post, PopupAnnouncement, GalleryAlbum, GalleryPhoto

class PostPublicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'slug',
            'content',
            'image',
            'type',
            'created_at',
            'updated_at',
        ]

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'slug',
            'content',
            'image',
            'type',
            'is_published',
            'created_at',
            'updated_at',
        ]

class PopupAnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopupAnnouncement
        fields = [
            'id',
            'badge_text',
            'title',
            'description',
            'highlight_text',
            'button_text',
            'button_link',
            'image',
            'is_active',
            'created_at',
            'updated_at',
        ]

class GalleryPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryPhoto
        fields = ['id', 'image', 'caption', 'order', 'created_at']

class GalleryAlbumSerializer(serializers.ModelSerializer):
    photos = GalleryPhotoSerializer(many=True, read_only=True)
    photo_count = serializers.IntegerField(source='photos.count', read_only=True)
    cover_image_url = serializers.CharField(source='get_cover_image_url', read_only=True)

    class Meta:
        model = GalleryAlbum
        fields = [
            'id',
            'title',
            'slug',
            'description',
            'cover_image',
            'cover_image_url',
            'photo_count',
            'photos',
            'is_published',
            'created_at',
            'updated_at',
        ]



