from django.urls import path
from api.views import AllRecords, OneRecord

urlpatterns = [
     path('records', AllRecords.as_view(), name='records'),
     path('records/<int:pk>', OneRecord.as_view(), name='one_record'),
]
