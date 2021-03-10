from django.db import models
from datetime import datetime


class DailyRecord(models.Model):
    title = models.CharField(max_length=128, default=datetime.now().strftime('%Y/%m/%d %H:%M'))
    body = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __repr__(self):
        return self.title
