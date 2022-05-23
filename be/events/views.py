from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

from events.models import Event
from events.serializer import EventDetailSerializer, EventListSerializer


class CreateEventView(generics.CreateAPIView):
    serializer_class = EventDetailSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        user = request.user
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(owner=user)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class EventsListView(generics.ListAPIView):
    serializer_class = EventListSerializer
    queryset = Event.get_all()
    permission_classes = [IsAuthenticatedOrReadOnly]


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
            event_date__year=date[2],
            event_date__month=f'{date[1]}',
            event_date__day=f'{date[0]}',
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
    permission_classes = [IsAuthenticatedOrReadOnly]
