from django.db import models
from django.core.validators import validate_email

from authentication.models import User
from city.models import City


TYPE_OF_EVENT_CHOICE = [
    (0, 'Entertainment'),
    (1, 'Spectacle'),
    (2, 'Exhibition'),
    (3, 'Concert'),
    (4, 'Meeting'),
    (5, 'Courses'),
    (6, 'Entertainment for children'),
    (7, 'Showing movies'),
    (8, 'Opening'),
]


class Event(models.Model):
    title = models.CharField(max_length=50, unique=True)
    describe = models.TextField(max_length=500)
    type_of_event = models.IntegerField(choices=TYPE_OF_EVENT_CHOICE, default=0)
    img = models.ImageField(null=True, blank=True)
    # owner = models.ForeignKey(User, verbose_name='User', on_delete=models.CASCADE)
    event_date = models.DateTimeField()
    city = models.ForeignKey(City, verbose_name='City', on_delete=models.CASCADE)
    address = models.CharField(max_length=60)
    ticket_price = models.IntegerField(default=0)
    email = models.EmailField(max_length=100, verbose_name='Contact email',
                              validators=[validate_email])

    def __str__(self):
        pass

    def __repr__(self):
        return f'{self.__class__.__name__}(id={self.id})'

    @staticmethod
    def get_all():
        return Event.objects.all()
