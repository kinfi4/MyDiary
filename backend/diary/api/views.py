from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT
from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

from api.models import DailyRecord
from api.serializers import RecordGetCreateSerializer, RecordUpdateSerializer


class AllRecords(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request: Request):
        records = RecordGetCreateSerializer(request.user.records.all(), many=True)
        return Response(records.data)

    def post(self, request: Request):
        print('it came here')
        print(request.data)
        print(request.GET)
        print(request.POST)
        print(request.user)
        print(request.auth)
        print(request.content_type)
        print(request.parsers)
        print(request.negotiator)
        print('requested data')
        request.data.update({'author': request.user})
        new_record = RecordGetCreateSerializer(data=request.data)

        print('new record created')

        if new_record.is_valid(raise_exception=False):
            print('new record is valid')
            new_record.save(author=request.user)
            print('new record is saved')
            return Response(new_record.data)

        print('new record Is not valid')
        return Response(status=HTTP_400_BAD_REQUEST)


class OneRecord(APIView):
    permission_classes = (IsAuthenticated,)

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

        print(request.data)
        print(request.GET)
        print(request.POST)
        print(request.user)
        print(request.auth)
        print(request.content_type)
        print(request.parsers)
        print(request.negotiator)

        record = RecordUpdateSerializer(self.get_object(pk), data=request.data)

        if record.is_valid():
            record.save()
            return Response(record.data)

        return Response(status=HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        self.get_object(pk).delete()
        return Response(status=HTTP_204_NO_CONTENT)
