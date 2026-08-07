"""
Django settings for core project.
"""

from pathlib import Path
from decouple import config, Csv
import dj_database_url

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Fail-Safe Production Defaults:
SECRET_KEY = config('SECRET_KEY', default='django-insecure-railway-build-placeholder-key-change-me-in-prod')

# DEBUG defaults strictly to False
DEBUG = config('DEBUG', default=False, cast=bool)

# ALLOWED_HOSTS Hardening:
raw_allowed_hosts = config('ALLOWED_HOSTS', default='')
ALLOWED_HOSTS = [host.strip() for host in raw_allowed_hosts.split(',') if host.strip()]

# Railway injected public domain support
railway_public_domain = config('RAILWAY_PUBLIC_DOMAIN', default='')
if railway_public_domain and railway_public_domain not in ALLOWED_HOSTS:
    ALLOWED_HOSTS.append(railway_public_domain)

# Fallback subdomains for Railway apps
for host in ['.railway.app', '.up.railway.app', 'localhost', '127.0.0.1']:
    if host not in ALLOWED_HOSTS:
        ALLOWED_HOSTS.append(host)

# HTTPS / Proxy Header Fix:
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SECURE_SSL_REDIRECT = False if DEBUG else config('SECURE_SSL_REDIRECT', default=True, cast=bool)
SESSION_COOKIE_SECURE = not DEBUG
CSRF_COOKIE_SECURE = not DEBUG


# CSRF Trusted Origins (handles apex, www, and Railway public domains)
raw_csrf_trusted = config(
    'CSRF_TRUSTED_ORIGINS',
    default='https://yokohama.edu.np,https://www.yokohama.edu.np',
)
CSRF_TRUSTED_ORIGINS = [origin.strip() for origin in raw_csrf_trusted.split(',') if origin.strip()]

if railway_public_domain:
    railway_origin = f"https://{railway_public_domain}"
    if railway_origin not in CSRF_TRUSTED_ORIGINS:
        CSRF_TRUSTED_ORIGINS.append(railway_origin)

for domain in ['https://*.railway.app', 'https://*.up.railway.app']:
    if domain not in CSRF_TRUSTED_ORIGINS:
        CSRF_TRUSTED_ORIGINS.append(domain)



# Application definition

INSTALLED_APPS = [
    'unfold',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    
    # Third-party apps
    'cloudinary_storage',
    'cloudinary',
    'rest_framework',
    'corsheaders',
    
    # Local apps
    'content',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'


# Database — Neon PostgreSQL (no SQLite fallback)
DATABASE_URL = config('DATABASE_URL')
DATABASES = {
    'default': dj_database_url.parse(
        DATABASE_URL,
        conn_max_age=0,
        conn_health_checks=True,
    )
}

# Force IPv4 — Neon resolves to both IPv6 and IPv4 but IPv6 is unreliable
import socket
_neon_host = DATABASES['default'].get('HOST', '')
if _neon_host:
    try:
        _ipv4 = socket.getaddrinfo(_neon_host, 5432, socket.AF_INET)[0][4][0]
        DATABASES['default'].setdefault('OPTIONS', {})['hostaddr'] = _ipv4
    except (socket.gaierror, IndexError):
        pass  # fall back to normal resolution

# PgBouncer (Neon pooler) doesn't support server-side cursors
DATABASES['default']['DISABLE_SERVER_SIDE_CURSORS'] = True


# Password validation

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Asia/Kathmandu'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)

STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

# Media files (Uploaded images)
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# Cloudinary Configuration
CLOUDINARY_STORAGE = {
    'CLOUD_NAME': config('CLOUDINARY_CLOUD_NAME', default=''),
    'API_KEY': config('CLOUDINARY_API_KEY', default=''),
    'API_SECRET': config('CLOUDINARY_API_SECRET', default=''),
}

cloudinary_name = CLOUDINARY_STORAGE['CLOUD_NAME'].strip()
use_cloudinary = bool(cloudinary_name and cloudinary_name != 'your_cloud_name_here')

STORAGES = {
    "default": {
        "BACKEND": "cloudinary_storage.storage.MediaCloudinaryStorage" if use_cloudinary else "django.core.files.storage.FileSystemStorage",
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}


# CORS Configuration for yokohama.edu.np (apex + www domain support) and local dev
CORS_ALLOWED_ORIGINS = config(
    'CORS_ALLOWED_ORIGINS',
    default='https://yokohama.edu.np,https://www.yokohama.edu.np,http://localhost:3000',
    cast=Csv()
)
CORS_ALLOWED_ORIGIN_REGEXES = [
    r"^https://.*\.vercel\.app$",
]

# REST Framework Configuration
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20,
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': '60/minute',
    },
}

# Django Unfold Configuration
UNFOLD = {
    "SITE_TITLE": "Yokohama Admin",
    "SITE_HEADER": "Yokohama Consultancy Admin",
    "SITE_URL": "https://www.yokohama.edu.np/",
}

