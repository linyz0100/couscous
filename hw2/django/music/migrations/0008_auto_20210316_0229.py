# Generated by Django 3.1.7 on 2021-03-16 02:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0007_auto_20210316_0227'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artist',
            name='artist',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='artist',
            name='song',
            field=models.TextField(primary_key=True, serialize=False),
        ),
    ]