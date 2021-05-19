from django.contrib import admin
from .models import User, Rating, Song

class RatingAdmin(admin.ModelAdmin):
    list_display = ('username', 'song', 'rating')

class SongAdmin(admin.ModelAdmin):
    list_display = ('song', 'genre', 'release_date')

admin.site.register(Rating, RatingAdmin)
admin.site.register(Song, SongAdmin)
