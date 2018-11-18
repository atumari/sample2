from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('hangman/play/', views.play),
    path('hangman/vote/', views.vote),
    path('hangman/admin/', views.admin),
    path('hangman/register/', views.register),
    path('hangman/create/', views.create),
    path('hangman/ranking/', views.ranking),
]

urlpatterns = format_suffix_patterns(urlpatterns)