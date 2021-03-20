from datetime import datetime
from diary.settings import PAGE_SIZE

from django.core.exceptions import ObjectDoesNotExist

from api.models import DailyRecord
from api.exceptions import ObjectNotExistOrNoPermission


def get_user_records(user, fields, skip=0, number=PAGE_SIZE):
    return user.records.all().order_by('-created').values(*fields)[skip:skip+number]


def get_record(user, pk):
    try:
        return user.records.get(pk=pk)
    except ObjectDoesNotExist:
        raise ObjectNotExistOrNoPermission


def create_record(*args, **kwargs):
    if not kwargs.get('title'):
        kwargs['title'] = datetime.now().strftime('%Y/%m/%d %H:%M')

    new_record = DailyRecord.objects.create(**kwargs)
    return new_record
