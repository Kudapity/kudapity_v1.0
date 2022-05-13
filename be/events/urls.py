from django.contrib import admin
from django.urls import path, include
from events.views import *


app_name = 'events'
urlpatterns = [
    path('', EventsListView.as_view(), name='all events'),
    path('today/', TodayEventsListView.as_view(), name='today`s events'),
    path('tomorrow/', TomorrowEventsListView.as_view(), name='tomorrow`s events'),
    path('this-week/', ThisWeekEventsListView.as_view(), name='this week events'),
    path('this-month/', ThisMonthEventsListView.as_view(), name='this month events'),
    path('by-date/<str:date>/', ByDateEventsListView.as_view(), name='this month events'),
    path('new_event/', CreateEventView.as_view(), name='Create new event'),
    path('event/<int:pk>/', CreateEventView.as_view(), name='GET some event'),
]
