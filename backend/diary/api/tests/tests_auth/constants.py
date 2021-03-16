from enum import Enum
from django.urls import reverse


class TestDatabaseData(Enum):
    USER_USERNAME = 'Tomas'
    USER_EMAIL = 'tom@gmail.com'
    USER_PASSWORD = '1234'


class Urls(Enum):
    LOGIN_URL = reverse('rest_login')
    USER_DETAILS_URL = reverse('rest_user_details')


class Responses(Enum):
    USER_DETAIL_INFO_RESPONSE = {
        "pk": 1,
        "username": TestDatabaseData.USER_USERNAME.value,
        "email": TestDatabaseData.USER_EMAIL.value,
        "first_name": "",
        "last_name": ""
    }

    USER_DETAIL_WITHOUT_AUTH_RESPONSE = {
        "detail": "Authentication credentials were not provided."
    }
