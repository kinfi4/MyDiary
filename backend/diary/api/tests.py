from django.test import TestCase

from api.models import DailyRecord


class RecordTest(TestCase):
    def setUp(self):
        DailyRecord.objects.create('')

