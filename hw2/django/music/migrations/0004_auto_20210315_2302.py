# Generated by Django 3.1.7 on 2021-03-15 23:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('music', '0003_auto_20210315_2254'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Artists',
            new_name='Artist',
        ),
        migrations.RenameModel(
            old_name='Ratings',
            new_name='Rating',
        ),
        migrations.DeleteModel(
            name='Users',
        ),
        migrations.AlterField(
            model_name='rating',
            name='username',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
