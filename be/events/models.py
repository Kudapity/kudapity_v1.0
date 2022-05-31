from django.db import models
from django.core.validators import validate_email
from datetime import datetime, timedelta

from authentication.models import User


TYPE_OF_EVENT_CHOICE = [
    ('Entertainment', 'Entertainment'),
    ('Spectacle', 'Spectacle'),
    ('Exhibition', 'Exhibition'),
    ('Concert', 'Concert'),
    ('Meeting', 'Meeting'),
    ('Courses', 'Courses'),
    ('Entertainment for children', 'Entertainment for children'),
    ('Showing movies', 'Showing movies'),
    ('Opening', 'Opening'),
]

CITY_CHOICE = [
    ('Lviv', 'Lviv'),
    ('Kyiv', 'Kyiv'),
    ('Kharkiv', 'Kharkiv'),
    ('Odessa', 'Odessa'),
    ('Dnipro', 'Dnipro'),
    ('Ivano-Frankivsk', 'Ivano-Frankivsk'),
    ('Uzhgorod', 'Uzhgorod'),
    ('Chernihiv', 'Chernihiv'),
    ('Sumy', 'Sumy'),
]


class Event(models.Model):
    title = models.CharField(max_length=50, unique=True)
    describe = models.TextField(max_length=500)
    type_of_event = models.CharField(
        choices=TYPE_OF_EVENT_CHOICE,
        default='Entertainment',
        max_length=100,
    )
    img = models.ImageField(null=True, blank=True, upload_to='events/')
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    event_date = models.DateTimeField()
    city = models.CharField(
        choices=CITY_CHOICE,
        default='Lviv',
        max_length=100,
    )
    address = models.CharField(max_length=60)
    ticket_price = models.IntegerField(default=0)
    email = models.EmailField(
        max_length=100,
        verbose_name='Contact email',
        validators=[validate_email]
    )

    def __str__(self):
        return self.title

    def __repr__(self):
        return f'{self.__class__.__name__}(id={self.id})'

    @staticmethod
    def get_all():
        event_list = Event.objects.all()
        return event_list.order_by('event_date')

    @staticmethod
    def get_today_events():
        date = str(datetime.today().date()).split('-')
        event_list = Event.objects.all().filter(
            event_date__year=f'{date[0]}',
            event_date__month=f'{date[1]}',
            event_date__day=f'{date[2]}',
        )
        return event_list.order_by('event_date')

    @staticmethod
    def get_tomorrow_events():
        date = str(datetime.today().date()).split('-')
        event_list = Event.objects.all().filter(
            event_date__year=f'{date[0]}',
            event_date__month=f'{date[1]}',
            event_date__day=f'{int(date[2]) + 1}',
        )
        return event_list.order_by('event_date')

    @staticmethod
    def get_this_week_events():
        date = str(datetime.today().date())
        next_week = (datetime.now() + timedelta(days=7)).date()
        event_list = Event.objects.all().filter(
            event_date__range=[date, next_week],
        )
        return event_list.order_by('event_date')

    @staticmethod
    def get_this_month_events():
        date = str(datetime.today().date())
        month_end_date = f'{date[:4]}-{int(date[5:7])+1}-1'
        event_list = Event.objects.all().filter(
            event_date__range=[date, month_end_date],
        )
        return event_list.order_by('event_date')

    @staticmethod
    def get_by_date_events(date):
        event_list = Event.objects.all().filter(
            event_date__year=f'{date[6:]}',
            event_date__month=f'{date[3:4]}',
            event_date__day=f'{int(date[:1]) + 1}',
        )
        return event_list.order_by('event_date')
