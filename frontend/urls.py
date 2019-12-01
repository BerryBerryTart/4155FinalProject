from django.urls import path
from . import views
urlpatterns = [
    path('', views.index ),
    path('hotspots', views.index ),
    path('FAQ', views.index ),
    path('about', views.index )
]
