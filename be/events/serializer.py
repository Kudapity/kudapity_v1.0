from rest_framework import serializers
from events.models import Event


class EventDetailSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.email')

    class Meta:
        model = Event
        fields = ['title', 'type_of_event', 'describe', 'event_date', 'city', 'address',
                  'ticket_price', 'email', 'owner']


class EventListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['title', 'type_of_event', 'describe', 'event_date', 'city', 'address',
                  'ticket_price', 'email', 'owner']
