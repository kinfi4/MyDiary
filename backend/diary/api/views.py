from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT
from rest_framework.permissions import IsAuthenticated
from django.http import Http404

from api.serializers import RecordGetCreateSerializer, RecordUpdateSerializer
from api.exceptions import ObjectNotExistOrNoPermission
from api import helpers
from diary.settings import PAGE_SIZE


class AllRecords(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request: Request):
        fields = list(request.query_params.keys())

        if 'page' in fields:
            fields.remove('page')

        page = int(request.query_params.get('page', 0))
        records = RecordGetCreateSerializer(
            helpers.get_user_records(request.user, fields, page*PAGE_SIZE, PAGE_SIZE),
            many=True
        )

        return Response(records.data)

    def post(self, request: Request):
        request_data = dict(request.data)
        request_data.update({'author_id': request.user.id})

        new_record = RecordGetCreateSerializer(data=request_data)

        if new_record.is_valid(raise_exception=False):
            new_record.save()
            return Response(new_record.data)

        return Response(status=HTTP_400_BAD_REQUEST)


class OneRecord(APIView):
    permission_classes = (IsAuthenticated,)

    @staticmethod
    def get_object(user, pk):
        try:
            return helpers.get_record(user, pk)
        except ObjectNotExistOrNoPermission:
            raise Http404

    def get(self, request: Request, pk):
        record = RecordGetCreateSerializer(self.get_object(request.user, pk))
        return Response(record.data)

    def put(self, request: Request, pk):
        record = RecordUpdateSerializer(self.get_object(request.user, pk), data=request.data)

        if record.is_valid():
            record.save()
            return Response(record.data)

        return Response(status=HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        self.get_object(request.user, pk).delete()
        return Response(status=HTTP_204_NO_CONTENT)
