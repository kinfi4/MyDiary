from enum import Enum

from django.urls import reverse


class Urls(Enum):
    ALL_RECORDS_URL = reverse('records')
    SINGLE_RECORD_URL = reverse('one_record')


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
    pass



