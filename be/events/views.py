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


# class ByDateEventsListView(generics.ListAPIView):
#     serializer_class = EventListSerializer
#
#     def get_queryset(self):
#         date = self.request.query_params.get('date', None)
#         date_lst = date.split('-')
#         event_list = Event.objects.all().filter(
#             event_date__year=f'{date}',
#             # event_date__month=f'{date_lst[1]}',
#             # event_date__day=f'{date_lst[0]}',
#         )
#         queryset = event_list.order_by('event_date')
#         return queryset


class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EventListSerializer
    queryset = Event.get_all()
