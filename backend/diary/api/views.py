from django.http import HttpRequest
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import DailyRecord
from api.serializers import RecordSerializer


class AllRecords(APIView):
    def get(self, request: HttpRequest):
        records = RecordSerializer(data=DailyRecord.objects.all(), many=True)
        return Response(records.data)

    def post(self, request: HttpRequest):
        new_record = RecordSerializer(data=request.POST)

        if new_record.is_valid(raise_exception=True):
            new_record.save()

        return Response(new_record.data)


class OneRecord(APIView):
    def get(self, request: HttpRequest, pk):
        record = RecordSerializer(data=DailyRecord.objects.get(pk))
        return Response(record.data)

    def update(self, request: HttpRequest, pk):
        record = RecordSerializer()
        