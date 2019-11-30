from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from wifi import views
from django.views.generic import TemplateView

urlpatterns = [
    path('aps/', views.CurrAPList.as_view()),
    path('timeslices/', views.TimeSlices.as_view()),
    path('view/<int:pk>/', views.DetailView.as_view()),
    path('minslices/', views.MinTimeSliceView.as_view()),
    path('average/', views.MinAPAverageView.as_view()),
    path('average/<str:ap>/', views.APAverageView.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
