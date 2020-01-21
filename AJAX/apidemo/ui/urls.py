from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('text', views.text),
    path('rating', views.rating),
    path('slider', views.slider),
    path('dialog', views.dialog),
    path('progress', views.progress),
]
