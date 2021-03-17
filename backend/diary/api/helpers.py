from django.core.exceptions import ObjectDoesNotExist

from api.models import User, DailyRecord
from api.exceptions import ObjectNotExistOrNoPermission


def get_user_records(user, fields):
    return user.records.all().values(*fields)


def get_record(user, pk):
    try:
        return user.records.get(pk=pk)
    except ObjectDoesNotExist:
        raise ObjectNotExistOrNoPermission
