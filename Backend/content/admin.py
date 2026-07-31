from django.contrib import admin
from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'type', 'is_featured', 'is_published', 'created_at')
    list_filter = ('type', 'is_published', 'is_featured')
    prepopulated_fields = {'slug': ('title',)}
