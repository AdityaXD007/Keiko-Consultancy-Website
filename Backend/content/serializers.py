from rest_framework import serializers
from .models import Post

class PostPublicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'slug',
            'content',
            'type',
            'is_featured',
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
            'type',
            'is_published',
            'is_featured',
            'created_at',
            'updated_at',
        ]
