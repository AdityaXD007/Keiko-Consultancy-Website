"""
Django settings for core project — supports development and production.

Environment selection is driven by env vars (via python-decouple):
  - Local dev  -> .env (DEBUG=True, local Postgres, filesystem media)
  - Production -> env vars set on Railway/Render (DEBUG=False, Neon Postgres, Cloudinary)
"""

from pathlib import Path
import socket
import dj_database_url
from decouple import config, Csv

# ---------------------------------------------------------------------------
# Base paths
# ---------------------------------------------------------------------------
BASE_DIR = Path(__file__).resolve().parent.parent


# ---------------------------------------------------------------------------
# Core security
# ---------------------------------------------------------------------------
SECRET_KEY = config(
    'SECRET_KEY',
    default='django-insecure-dev-only-change-me-in-production-1234567890',
)

# DEBUG defaults to False for safety (production-friendly)
DEBUG = config('DEBUG', default=False, cast=bool)

# A single flag that clearly identifies the environment in logs / templates
ENVIRONMENT = config('ENVIRONMENT', default='development' if DEBUG else 'production')


# ---------------------------------------------------------------------------
# Allowed hosts
# ---------------------------------------------------------------------------
raw_allowed_hosts = config('ALLOWED_HOSTS', default='')
ALLOWED_HOSTS = [h.strip() for h in raw_allowed_hosts.split(',') if h.strip()]

# Hosting platform hostnames (injected automatically)
render_external_hostname = config('RENDER_EXTERNAL_HOSTNAME', default='')
railway_public_domain = config('RAILWAY_PUBLIC_DOMAIN', default='')

if render_external_hostname and render_external_hostname not in ALLOWED_HOSTS:
    ALLOWED_HOSTS.append(render_external_hostname)

if railway_public_domain and railway_public_domain not in ALLOWED_HOSTS:
    ALLOWED_HOSTS.append(railway_public_domain)

# Environment-specific host fallbacks
if DEBUG:
    for host in ['localhost', '127.0.0.1', '0.0.0.0']:
        if host not in ALLOWED_HOSTS:
            ALLOWED_HOSTS.append(host)
else:
    for host in ['.up.railway.app', '.railway.app', '.onrender.com']:
        if host not in ALLOWED_HOSTS:
            ALLOWED_HOSTS.append(host)


# ---------------------------------------------------------------------------
# HTTPS / Proxy / Cookies
# ---------------------------------------------------------------------------
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# In dev: never redirect to HTTPS. In prod: default to True (can override via env).
SECURE_SSL_REDIRECT = False if DEBUG else config('SECURE_SSL_REDIRECT', default=True, cast=bool)

SESSION_COOKIE_SECURE = not DEBUG
CSRF_COOKIE_SECURE = not DEBUG

# HSTS — only meaningful in production behind HTTPS
if not DEBUG:
    SECURE_HSTS_SECONDS = config('SECURE_HSTS_SECONDS', default=31536000, cast=int)
    SECURE_HSTS_INCLUDE_SUBDOMAINS = config('SECURE_HSTS_INCLUDE_SUBDOMAINS', default=True, cast=bool)
    SECURE_HSTS_PRELOAD = config('SECURE_HSTS_PRELOAD', default=True, cast=bool)


# ---------------------------------------------------------------------------
# CSRF trusted origins
# ---------------------------------------------------------------------------
raw_csrf_trusted = config(
    'CSRF_TRUSTED_ORIGINS',
    default='https://yokohama.edu.np,https://www.yokohama.edu.np',
)
CSRF_TRUSTED_ORIGINS = [o.strip() for o in raw_csrf_trusted.split(',') if o.strip()]

if DEBUG:
    # Local dev origins
    for origin in ['http://localhost:8000', 'http://127.0.0.1:8000',
                   'http://localhost:3000', 'http://127.0.0.1:3000']:
        if origin not in CSRF_TRUSTED_ORIGINS:
            CSRF_TRUSTED_ORIGINS.append(origin)

if render_external_hostname:
    origin = f"https://{render_external_hostname}"
    if origin not in CSRF_TRUSTED_ORIGINS:
        CSRF_TRUSTED_ORIGINS.append(origin)

if railway_public_domain:
    origin = f"https://{railway_public_domain}"
    if origin not in CSRF_TRUSTED_ORIGINS:
        CSRF_TRUSTED_ORIGINS.append(origin)

for wildcard in ['https://*.onrender.com', 'https://*.railway.app', 'https://*.up.railway.app']:
    if wildcard not in CSRF_TRUSTED_ORIGINS:
        CSRF_TRUSTED_ORIGINS.append(wildcard)


# ---------------------------------------------------------------------------
# Applications
# ---------------------------------------------------------------------------
INSTALLED_APPS = [
    'unfold',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third-party
    'cloudinary_storage',
    'cloudinary',
    'rest_framework',
    'corsheaders',

    # Local
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
ASGI_APPLICATION = 'core.asgi.application'


# ---------------------------------------------------------------------------
# Database
# ---------------------------------------------------------------------------
DATABASE_URL = config('DATABASE_URL')
DATABASES = {
    'default': dj_database_url.parse(
        DATABASE_URL,
        conn_max_age=0,
        conn_health_checks=True,
    )
}

# Neon resolves to both IPv6 & IPv4; IPv6 can be unreliable — force IPv4.
_neon_host = DATABASES['default'].get('HOST', '')
if _neon_host:
    try:
        _ipv4 = socket.getaddrinfo(_neon_host, 5432, socket.AF_INET)[0][4][0]
        DATABASES['default'].setdefault('OPTIONS', {})['hostaddr'] = _ipv4
    except (socket.gaierror, IndexError):
        pass  # fall back to normal resolution

# PgBouncer (Neon pooler) doesn't support server-side cursors.
DATABASES['default']['DISABLE_SERVER_SIDE_CURSORS'] = True


# ---------------------------------------------------------------------------
# Password validation
# ---------------------------------------------------------------------------
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]


# ---------------------------------------------------------------------------
# Internationalization
# ---------------------------------------------------------------------------
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'Asia/Kathmandu'
USE_I18N = True
USE_TZ = True


# ---------------------------------------------------------------------------
# Static & media files
# ---------------------------------------------------------------------------
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# Cloudinary config — blank in dev → filesystem storage; real in prod → Cloudinary.
CLOUDINARY_STORAGE = {
    'CLOUD_NAME': config('CLOUDINARY_CLOUD_NAME', default=''),
    'API_KEY': config('CLOUDINARY_API_KEY', default=''),
    'API_SECRET': config('CLOUDINARY_API_SECRET', default=''),
}

_cloudinary_name = CLOUDINARY_STORAGE['CLOUD_NAME'].strip()
use_cloudinary = bool(_cloudinary_name and _cloudinary_name != 'your_cloud_name_here')

STORAGES = {
    "default": {
        "BACKEND": (
            "cloudinary_storage.storage.MediaCloudinaryStorage"
            if use_cloudinary
            else "django.core.files.storage.FileSystemStorage"
        ),
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}

# In dev, WhiteNoise's manifest storage can complain if staticfiles/ is empty.
# Use the non-manifest version so `runserver` doesn't blow up locally.
if DEBUG:
    STORAGES["staticfiles"] = {
        "BACKEND": "whitenoise.storage.CompressedStaticFilesStorage",
    }


# ---------------------------------------------------------------------------
# CORS
# ---------------------------------------------------------------------------
CORS_ALLOWED_ORIGINS = config(
    'CORS_ALLOWED_ORIGINS',
    default=(
        'http://localhost:3000,http://127.0.0.1:3000'
        if DEBUG
        else 'https://yokohama.edu.np,https://www.yokohama.edu.np'
    ),
    cast=Csv(),
)
CORS_ALLOWED_ORIGIN_REGEXES = [
    r"^https://.*\.vercel\.app$",
]


# ---------------------------------------------------------------------------
# DRF
# ---------------------------------------------------------------------------
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


# ---------------------------------------------------------------------------
# Django Unfold (Admin theme)
# ---------------------------------------------------------------------------
UNFOLD = {
    "SITE_TITLE": "Yokohama Admin",
    "SITE_HEADER": "Yokohama Consultancy Admin",
    "SITE_URL": "https://www.yokohama.edu.np/",
}


# ---------------------------------------------------------------------------
# Logging — cleaner output, more verbose in dev
# ---------------------------------------------------------------------------
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'simple': {
            'format': '[{levelname}] {asctime} {name}: {message}',
            'style': '{',
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'simple',
        },
    },
    'root': {
        'handlers': ['console'],
        'level': 'DEBUG' if DEBUG else 'INFO',
    },
    'loggers': {
        'django.request': {
            'handlers': ['console'],
            'level': 'DEBUG' if DEBUG else 'WARNING',
            'propagate': False,
        },
    },
}