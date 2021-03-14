from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT
from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

from api.models import DailyRecord
from api.serializers import RecordGetCreateSerializer, RecordUpdateSerializer
from api.permissoin import IsAuthorPermission


class AllRecords(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request: Request):
        records = RecordGetCreateSerializer(request.user.records.all(), many=True)
        return Response(records.data)

    def post(self, request: Request):
        request.data.update({'author': request.user})
        new_record = RecordGetCreateSerializer(data=request.data)

        if new_record.is_valid(raise_exception=True):
            new_record.save(author=request.user)
            return Response(new_record.data)

        return Response(status=HTTP_400_BAD_REQUEST)


class OneRecord(APIView):
    # permission_classes = (IsAuthorPermission,)

    @staticmethod
    def get_object(pk):
        try:
            return DailyRecord.objects.get(pk=pk)
        except ObjectDoesNotExist:
            raise Http404

    def get(self, request: Request, pk):
        record = RecordGetCreateSerializer(self.get_object(pk))
        return Response(record.data)

    def put(self, request: Request, pk):
        record = RecordUpdateSerializer(self.get_object(pk), data=request.data)

        if record.is_valid():
            record.save()
            return Response(record.data)

        return Response(status=HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        self.get_object(pk).delete()
        return Response(status=HTTP_204_NO_CONTENT)
