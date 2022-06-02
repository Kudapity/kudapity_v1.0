from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

from events.models import Event
from events.serializer import EventDetailSerializer, EventListSerializer
from rest_framework.generics import DestroyAPIView


class CreateEventView(generics.CreateAPIView):
    serializer_class = EventDetailSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class EventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer
    queryset = Event.get_all()
    permission_classes = [IsAuthenticatedOrReadOnly]


class UserEventsView(generics.ListAPIView):
    serializer_class = EventListSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        user_id = self.kwargs['pk']
        event_list = Event.objects.all().filter(owner__id=user_id)
        queryset = event_list.order_by('event_date')
        return queryset


class TodayEventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer
    queryset = Event.get_today_events()
    permission_classes = [IsAuthenticatedOrReadOnly]


class TomorrowEventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer
    queryset = Event.get_tomorrow_events()
    permission_classes = [IsAuthenticatedOrReadOnly]


class ThisWeekEventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer
    queryset = Event.get_this_week_events()
    permission_classes = [IsAuthenticatedOrReadOnly]


class ThisMonthEventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer
    queryset = Event.get_this_month_events()
    permission_classes = [IsAuthenticatedOrReadOnly]


class ByDateEventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        date = self.kwargs['date'].split('-')
        event_list = Event.objects.all().filter(
            event_date__year=date[0],
            event_date__month=f'{date[1]}',
            event_date__day=f'{date[2]}',
        )
        queryset = event_list.order_by('event_date')
        return queryset


class ByCityEventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        city = self.kwargs['city']
        event_list = Event.objects.all().filter(city=city)
        queryset = event_list.order_by('event_date')
        return queryset


class ByTypeEventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        type = self.kwargs['type']
        event_list = Event.objects.all().filter(type_of_event=type)
        queryset = event_list.order_by('event_date')
        return queryset


class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EventListSerializer
    queryset = Event.get_all()
    permission_classes = [IsAuthenticatedOrReadOnly]


class DeleteEventView(generics.DestroyAPIView):
    serializer_class = EventListSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Event.objects.filter(owner=self.request.user, id=self.kwargs['pk'])
        return queryset
