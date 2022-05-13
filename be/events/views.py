from rest_framework import generics
from events.models import Event
from events.serializer import EventDetailSerializer, EventListSerializer


class CreateEventView(generics.CreateAPIView):
    serializer_class = EventDetailSerializer


class EventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer
    queryset = Event.get_all()


class TodayEventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer
    queryset = Event.get_today_events()


class TomorrowEventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer
    queryset = Event.get_tomorrow_events()


class ThisWeekEventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer
    queryset = Event.get_this_week_events()


class ThisMonthEventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer
    queryset = Event.get_this_month_events()


class ByDateEventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer

    def get_queryset(self):
        date = self.kwargs['date'].split('-')
        event_list = Event.objects.all().filter(
            event_date__year=date[2],
            event_date__month=f'{date[1]}',
            event_date__day=f'{date[0]}',
        )
        queryset = event_list.order_by('event_date')
        return queryset


class ByCityEventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer

    def get_queryset(self):
        city = self.kwargs['city']
        event_list = Event.objects.all().filter(city__name=city)
        queryset = event_list.order_by('event_date')
        return queryset


class ByTypeEventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer

    def get_queryset(self):
        type = self.kwargs['type']
        TYPE_OF_EVENT_CHOICE = [
            'Entertainment', 'Spectacle', 'Exhibition', 'Concert', 'Meeting',
            'Courses', 'Entertainment for children', 'Showing movies', 'Opening',
        ]
        event_list = Event.objects.all().filter(type_of_event=TYPE_OF_EVENT_CHOICE.index(type))
        queryset = event_list.order_by('event_date')
        return queryset


class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EventListSerializer
    queryset = Event.get_all()
