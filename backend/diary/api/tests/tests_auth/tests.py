from django.test import Client
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase

from api.models import User
from api.tests.tests_auth.constants import Urls, Responses, TestDatabaseData


class TestAuthAPI(APITestCase):
    def setUp(self) -> None:
        self.user = User.objects.create_user(username=TestDatabaseData.USER_USERNAME.value,
                                             password=TestDatabaseData.USER_PASSWORD.value,
                                             email=TestDatabaseData.USER_EMAIL.value)

        self.token = Token.objects.create(user=self.user)
        self.client = Client(HTTP_AUTHORIZATION=f'Token {self.token.key}')
        self.anonymous_client = Client()

    def test_detail_user_data(self):
        response = self.client.get(Urls.USER_DETAILS_URL.value)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, Responses.USER_DETAIL_INFO_RESPONSE.value)

    def test_detail_user_data_without_authorization(self):
        response = self.anonymous_client.get(Urls.USER_DETAILS_URL.value)

        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(response.data, Responses.USER_DETAIL_WITHOUT_AUTH_RESPONSE.value)

    def test_login(self):
        response = self.anonymous_client.post(Urls.LOGIN_URL.value, data={
            'username': TestDatabaseData.USER_USERNAME.value,
            'password': TestDatabaseData.USER_PASSWORD.value,
            'email': TestDatabaseData.USER_EMAIL.value
        })

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, {
            'key': self.token.key
        })
