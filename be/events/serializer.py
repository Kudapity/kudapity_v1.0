from rest_framework import serializers
from events.models import Event


class EventDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['title', 'describe', 'event_date', 'city', 'address',
                  'ticket_price', 'email']


class EventListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['title', 'describe', 'event_date', 'city', 'address',
                  'ticket_price', 'email']
