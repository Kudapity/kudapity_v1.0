from django.contrib import admin
from django.urls import path, include
from events.views import CreateEventView, EventsListView, EventDetailView


app_name = 'events'
urlpatterns = [
    path('', EventsListView.as_view(), name='List of all events'),
    path('new_event/', CreateEventView.as_view(), name='Create new event'),
    path('event/<int:pk>/', CreateEventView.as_view(), name='GET some event'),
]
