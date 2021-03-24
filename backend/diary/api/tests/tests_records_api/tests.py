import json

from django.test import Client
from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase
from rest_framework import status

from api.models import User, DailyRecord
from api.tests.tests_records_api.constants import TestData, TestResponses, Urls


class AllRecordsAndPermissionsApiTests(APITestCase):
    def setUp(self) -> None:
        self.user = User.objects.create_user(
            username=TestData.TEST_USERNAME.value,
            password=TestData.TEST_USER_PASSWORD.value
        )

        self.token = Token.objects.create(user=self.user)
        self.client = Client(HTTP_AUTHORIZATION=f'Token {self.token.key}')
        self.anonymous_client = Client()

        test_data = list(zip(TestData.RECORDS_TITLES.value, TestData.RECORDS_BODIES.value))
        for title, body in reversed(test_data):
            DailyRecord.objects.create(title=title, body=body, author=self.user)

    def test_getting_all_records(self):
        response = self.client.get(Urls.ALL_RECORDS_URL.value)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, TestResponses.ALL_RECORDS_RESPONSE.value)

    def test_getting_only_record_titles_and_bodies(self):
        response = self.client.get(Urls.ALL_RECORDS_URL.value + '?title&body')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, TestResponses.ALL_RECORDS_TITLES_BODIES_RESPONSE.value)

    def test_getting_detailed_record(self):
        response = self.client.get(Urls.ALL_RECORDS_URL.value + '/' + str(DailyRecord.objects.first().id))

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, TestResponses.SINGLE_RECORD_RESPONSE.value)

    def test_permissions(self):
        response = self.anonymous_client.get(Urls.ALL_RECORDS_URL.value)

        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(response.data, TestResponses.NO_AUTHENTICATION_RESPONSE.value)

    def test_getting_not_yours_records(self):
        new_user = User.objects.create_user(username='Tom2', password='1234')
        new_user_token = Token.objects.create(user=new_user)
        new_client = Client(HTTP_AUTHORIZATION=f'Token {new_user_token.key}')

        response = new_client.get(Urls.ALL_RECORDS_URL.value + '/' + str(self.user.records.first().id))

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data, TestResponses.NOT_FOUND_RESPONSE.value)


class RecordCRUDTests(APITestCase):
    def setUp(self) -> None:
        self.user = User.objects.create_user(
            username=TestData.TEST_USERNAME.value,
            password=TestData.TEST_USER_PASSWORD.value
        )

        self.token = Token.objects.create(user=self.user)
        self.client = Client(HTTP_AUTHORIZATION=f'Token {self.token.key}')

    def test_crud_operations(self):
        response = self.client.get(Urls.ALL_RECORDS_URL.value)
        db_response = DailyRecord.objects.all()  # []

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), len(db_response))  # [] == []
        self.assertEqual(len(response.data), 0)

        # Adding the first record
        response = self.client.post(Urls.ALL_RECORDS_URL.value, data=json.dumps({
            'title': TestData.RECORDS_TITLES.value[0],
            'body': TestData.RECORDS_BODIES.value[0]
        }), content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Adding the second record
        response = self.client.post(Urls.ALL_RECORDS_URL.value, data=json.dumps({
            'title': TestData.RECORDS_TITLES.value[1],
            'body': TestData.RECORDS_BODIES.value[1]
        }), content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Changing the second record
        self.client.put(Urls.ALL_RECORDS_URL.value + '/' + str(DailyRecord.objects.first().id), data=json.dumps({
            'title': TestData.RECORDS_TITLES.value[1]
        }), content_type='application/json')

        # Checking the edited instance
        response = self.client.get(Urls.ALL_RECORDS_URL.value + '/' + str(DailyRecord.objects.first().id))
        self.assertEqual(response.data.get('title'), TestData.RECORDS_TITLES.value[1])
        self.assertEqual(response.data.get('body'), TestData.RECORDS_BODIES.value[0])

        # Deleting the first record
        self.client.delete(Urls.ALL_RECORDS_URL.value + '/' + str(DailyRecord.objects.all().first().id))

        response = self.client.get(Urls.ALL_RECORDS_URL.value)
        db_response = DailyRecord.objects.all()

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        self.assertEqual(response.data[0].get('title'), list(db_response)[0].title)
        self.assertEqual(response.data[0].get('body'), list(db_response)[0].body)

        self.assertEqual(response.data[0].get('title'), TestData.RECORDS_TITLES.value[1])
        self.assertEqual(response.data[0].get('body'), TestData.RECORDS_BODIES.value[1])

        self.assertEqual(len(list(response.data)), 1)
        self.assertEqual(len(db_response), 1)
