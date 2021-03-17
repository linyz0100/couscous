from django.db import models
from django.contrib.auth.models import User
# from django.utils import timezone
# import datetime

# class Question(models.Model):
#     question_text = models.CharField(max_length=200)
#     pub_date = models.DateTimeField('date published')
#     def __str__(self):
#         return self.question_text
#     def was_published_recently(self):
#         return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
#
# class Choice(models.Model):
#     question = models.ForeignKey(Question, on_delete=models.CASCADE)
#     choice_text = models.CharField(max_length=200)
#     votes = models.IntegerField(default=0)
#     def __str__(self):
#         return self.choice_text

# class User(models.Model):
#     username = models.CharField(primary_key=True, max_length=200)
#     password = models.CharField(max_length=200)
#     def __str__(self):
#         return self.username

class Artist(models.Model):
    song = models.TextField(primary_key=True)
    artist = models.TextField()
    def __str__(self):
        return self.song

class Rating(models.Model):
    class Meta:
        unique_together = (('username','song'),)
    # username = models.CharField(primary_key=True)
    username = models.ForeignKey(User, on_delete=models.CASCADE)

    song = models.TextField()
    rating = models.IntegerField()
    def __int__(self):
        return self.rating

class Song(models.Model):
    song = models.TextField(primary_key=True)
    genre = models.TextField()
    release_date = models.IntegerField()

    def __str__(self):
        return self.genre














#
