from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, RatingSerializer, SongSerializer
from .models import User, Rating, Song

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class RatingView(viewsets.ModelViewSet):
    serializer_class = RatingSerializer
    queryset = Rating.objects.all()

class SongView(viewsets.ModelViewSet):
    serializer_class = SongSerializer
    queryset = Song.objects.all()
