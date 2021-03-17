from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render, redirect
from django.urls import reverse
from .models import User, Artist, Rating, Song
#from django.template import loader
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
# from .serializers import QuestionSerializer
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages

def index(request):
    return render(request, 'music/index.html')

def call_form(request):
    return render(request, 'music/form.html')

def test_form_1(request):
    if request.method == "POST" and 'submit1' in request.POST:
        user_input = request.POST.get('username1')
        try:
            selected_user = User.objects.get(username=user_input)
        except User.DoesNotExist:
            raise Http404("User does not exist")
    return render(request, "music/form.html", {'selected_user': selected_user})

def test_form_2(request):
    if request.method == "POST" and 'submit2' in request.POST:
        song_input = request.POST.get('song1')
        try:
            selected_song = Song.objects.get(song=song_input)
        except Song.DoesNotExist:
            raise Http404("Song does not exist")
    return render(request, "music/form.html", {'selected_song': selected_song})

def user(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}!')
            return redirect('user')
    else:
        form = UserCreationForm()
    return render(request, 'music/user.html', {'form': form})
    # if request.method == 'POST':
    #     form = UserCreationForm(request.POST)
    #     if form.is_valid():
    #         form.save()
    #         username = form.cleaned_data.get('username')
    #         messages.success(request, f'Account created for {username}!')
    #         return redirect('music-user')
    # else:
    #     form = UserCreationForm()
    # return render(request, 'music/user.html', {'form': form})









        #
