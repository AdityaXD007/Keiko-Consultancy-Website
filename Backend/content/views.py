from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.exceptions import ValidationError
from .models import Post
from .serializers import PostPublicSerializer

class PostListView(ListAPIView):
    serializer_class = PostPublicSerializer

    def get_queryset(self):
        # Base queryset strictly filters published posts only.
        # Unpublished items (even if marked is_featured=True) are never exposed.
        queryset = Post.objects.filter(is_published=True)
        
        # 1. Validate and filter by 'type' query parameter.
        # Truthy check (not `is not None`) so that an empty string from e.g.
        # ?type=${selectedType} where selectedType='' is treated as "no filter"
        # rather than raising a confusing "Invalid type ''" 400.
        post_type = self.request.query_params.get('type')
        if post_type:
            # Normalize case and whitespace to match 'featured' parsing behavior,
            # so ?type=News and ?type= news  resolve correctly instead of 400-ing.
            post_type = post_type.strip().lower()
            valid_types = [choice[0] for choice in Post.TYPE_CHOICES]
            if post_type not in valid_types:
                raise ValidationError({
                    "type": f"Invalid type '{post_type}'. Must be one of: {', '.join(valid_types)}."
                })
            queryset = queryset.filter(type=post_type)
            
        # 2. Validate and filter by 'featured' query parameter (strict boolean parsing).
        # Same truthy check as 'type' — an empty ?featured= is silently ignored.
        featured_param = self.request.query_params.get('featured')
        if featured_param:
            val_lower = featured_param.lower().strip()
            if val_lower in ['true', '1']:
                is_featured_val = True
            elif val_lower in ['false', '0']:
                is_featured_val = False
            else:
                raise ValidationError({
                    "featured": f"Invalid boolean value '{featured_param}' for 'featured'. Must be 'true', 'false', '1', or '0'."
                })
            queryset = queryset.filter(is_featured=is_featured_val)

        return queryset

class PostDetailView(RetrieveAPIView):
    serializer_class = PostPublicSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        return Post.objects.filter(is_published=True)
