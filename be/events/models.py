from django.db import models
from django.core.validators import validate_email
from city.models import City


class Event(models.Model):
    title = models.CharField(max_length=50, unique=True)
    describe = models.TextField(max_length=500)
    created_at = models.DateTimeField(editable=False, auto_now_add=True)
    event_date = models.DateTimeField()
    city = models.ForeignKey(City, verbose_name='City', on_delete=models.CASCADE)
    address = models.CharField(max_length=60)
    # user_id = ...
    likes = models.IntegerField(default=0)
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
