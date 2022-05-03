from django.shortcuts import render
from rest_framework import generics
from events.models import Event
from events.serializer import EventDetailSerializer, EventListSerializer


class CreateEventView(generics.CreateAPIView):
    serializer_class = EventDetailSerializer


class EventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer
    queryset = Event.get_all()


class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EventListSerializer
    queryset = Event.get_all()
