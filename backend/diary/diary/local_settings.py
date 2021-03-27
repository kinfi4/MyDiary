
SECRET_KEY = '!9#=k)_l8+fw#ixojr9g!ltt+2gre%@wnohoez3+b^bomo9^!n'
DEBUG = True

ALLOWED_HOSTS = []

STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / '../static'

STATICFILES_DIRS = (
    (BASE_DIR / '../../frontend/build/static'),
)
