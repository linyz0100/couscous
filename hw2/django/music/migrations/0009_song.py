# Generated by Django 3.1.7 on 2021-03-16 22:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0008_auto_20210316_0229'),
    ]

    operations = [
        migrations.CreateModel(
            name='Song',
            fields=[
                ('song', models.TextField(primary_key=True, serialize=False)),
                ('genre', models.TextField()),
                ('release_date', models.IntegerField()),
            ],
        ),
    ]