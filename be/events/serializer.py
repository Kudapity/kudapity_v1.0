from rest_framework import serializers
from events.models import Event


class EventDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['title', 'img', 'type_of_event', 'describe', 'event_date', 'city', 'address',
                  'ticket_price', 'email', 'owner']


class EventListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['title', 'describe', 'event_date', 'city', 'address',
                  'ticket_price', 'email', 'owner']
