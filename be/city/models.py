from django.db import models


class City(models.Model):
    name = models.CharField(max_length=30, verbose_name='City')

    def __str__(self):
        return f'{self.name}'

    def __repr__(self):
        return f'{self.__class__.__name__}(id={self.id})'
