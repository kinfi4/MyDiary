from django.db import models
from django.contrib.auth.models import User

from datetime import datetime


class DailyRecord(models.Model):
    title = models.CharField(max_length=128, default=datetime.now().strftime('%Y/%m/%d %H:%M'))
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='records', null=True)
    body = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
