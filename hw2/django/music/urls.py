from django.urls import path, include
from rest_framework import routers
from . import views
# from .views import QuestionViewSet
# router = routers.DefaultRouter()
# router.register('questions', QuestionViewSet)

app_name = 'music'
urlpatterns = [
    path('', views.index, name='index'),
    path ('db/', views.call_form, name="form"),
    path ('form1/', views.test_form_1, name="form1"),
    path ('form2/', views.test_form_2, name="form2"),
    # path('<int:user_id>/', views.detail, name='detail'),
    # path('<int:user_id>/results/', views.results, name='results'),
    # path('<int:user_id>/vote/', views.vote, name='vote'),
]
