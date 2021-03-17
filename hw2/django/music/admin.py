from django.contrib import admin

# Register your models here.
from .models import Rating, Artist, Song

admin.site.register(Rating)
admin.site.register(Artist)
admin.site.register(Song)
