from django.contrib import admin
from django.shortcuts import render
from django.urls import path, include, re_path


def index_page(request):
    return render(request, 'index.html', {})


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('api.urls')),
    path('api-auth', include('rest_framework.urls')),
    path('api/v1/rest-auth/', include('rest_auth.urls')),
    path('api/v1/rest-auth/registration/', include('rest_auth.registration.urls')),

    path('login', index_page),
    path('register', index_page),
    path('', index_page),
]
