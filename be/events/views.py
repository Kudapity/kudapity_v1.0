from django.shortcuts import render
from rest_framework import generics
from events.models import Event
from events.serializer import EventDetailSerializer, EventListSerializer


class CreateEvent(generics.CreateAPIView):
    serializer_class = EventDetailSerializer


class EventsList(generics.ListAPIView):
    serializer_class = EventListSerializer
    queryset = Event.get_all()
