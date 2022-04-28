from django.contrib import admin
from django.urls import path, include
from events.views import CreateEvent, EventsList


app_name = 'events'
urlpatterns = [
    path('', EventsList.as_view(), name='List of all events'),
    path('new_event/', CreateEvent.as_view(), name='Create new event'),
]
