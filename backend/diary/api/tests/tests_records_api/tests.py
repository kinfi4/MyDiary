from django.test import Client
from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase

from api.models import User, DailyRecord
from api.tests.tests_records_api.constants import TestData, TestResponses


class RecordsApiTests(APITestCase):
    def setUp(self) -> None:
        self.user = User.objects.create_user(
            username=TestData.TEST_USERNAME.value,
            password=TestData.TEST_USER_PASSWORD.value
        )

        self.token = Token.objects.create(user=self.user)
        self.client = Client(HTTP_AUTHORIZATION=f'Token: {self.token}')
        self.anonymous_client = Client()


