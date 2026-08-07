from django.urls import path
from .views import (
    PostListView,
    PostDetailView,
    PopupAnnouncementView,
    GalleryAlbumListView,
    GalleryAlbumDetailView,
)

urlpatterns = [
    path('posts/', PostListView.as_view(), name='post-list'),
    path('posts/<slug:slug>/', PostDetailView.as_view(), name='post-detail'),
    path('popup/', PopupAnnouncementView.as_view(), name='popup-announcement'),
    path('gallery/', GalleryAlbumListView.as_view(), name='gallery-album-list'),
    path('gallery/<slug:slug>/', GalleryAlbumDetailView.as_view(), name='gallery-album-detail'),
]


