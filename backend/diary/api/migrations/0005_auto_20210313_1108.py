# Generated by Django 3.1.7 on 2021-03-13 11:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20210313_1100'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dailyrecord',
            name='title',
            field=models.CharField(default='2021/03/13 11:08', max_length=128),
        ),
    ]
