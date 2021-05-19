from django.contrib import admin
from .models import User, Rating, Song

class RatingAdmin(admin.ModelAdmin):
    list_display = ('id', 'song', 'rating')

class SongAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'song', 'genre', 'release_date')

admin.site.register(Rating, RatingAdmin)
admin.site.register(Song, SongAdmin)
