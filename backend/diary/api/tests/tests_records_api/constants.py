from enum import Enum
from unittest import mock

from django.urls import reverse


class Urls(Enum):
    ALL_RECORDS_URL = reverse('records')


class TestData(Enum):
    TEST_USERNAME = 'Tomas'
    TEST_USER_PASSWORD = '1234'

    RECORDS_TITLES = [
        'Test record1', 'Test record2', 'And some more test records'
    ]

    RECORDS_BODIES = [
        'Some body first', 'Some body second', 'Some body third'
    ]


class TestResponses(Enum):
    ALL_RECORDS_RESPONSE = [
        {
            'id': mock.ANY,
            'title': record_title,
            'body': record_body,
            'created': mock.ANY
        } for record_title, record_body in zip(TestData.RECORDS_TITLES.value, TestData.RECORDS_BODIES.value)
    ]

    ALL_RECORDS_TITLES_BODIES_RESPONSE = [
        {
            'title': record_title,
            'body': record_body
        } for record_title, record_body in zip(TestData.RECORDS_TITLES.value, TestData.RECORDS_BODIES.value)
    ]

    SINGLE_RECORD_RESPONSE = {
        'id': mock.ANY,
        'title': TestData.RECORDS_TITLES.value[-1],
        'body': TestData.RECORDS_BODIES.value[-1],
        'created': mock.ANY
    }

    NO_AUTHENTICATION_RESPONSE = {
        "detail": "Authentication credentials were not provided."
    }

    NOT_FOUND_RESPONSE = {
        "detail": "Not found."
    }
