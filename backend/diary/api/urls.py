from django.urls import path
from api.views import AllRecords

urlpatterns = [
     path('records', AllRecords.as_view(), name='records'),
     path('records/<int:pk>')
]
