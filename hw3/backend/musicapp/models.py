from django.db import models
from django.contrib.auth.models import User

class Song(models.Model):
    song = models.CharField(max_length=120)
    artist = models.CharField(max_length=120)
    genre = models.CharField(max_length=120)
    release_date = models.IntegerField()

    def __str__(self):
        return self.song

class Rating(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    song = models.ForeignKey(Song, on_delete=models.CASCADE)
    rating = models.IntegerField(null=True, blank=True)

    def __int__(self):
        return self.rating
