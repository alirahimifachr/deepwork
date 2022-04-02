from email.policy import default
from django.db import models
from django.forms import BooleanField


class Deepwork(models.Model):
    project = models.CharField(max_length=100)
    open = models.BooleanField(default=False)

    class Meta:
        ordering = ['project']

    def __str__(self):
        return self.project


class Arr(models.Model):
    task = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)
    parent = models.ForeignKey(Deepwork, on_delete=models.CASCADE)

    def __str__(self):
        return (f'{self.task} > {self.parent}')


class TimeTracker(models.Model):
    date = models.DateField()
    today = models.IntegerField()
    week = models.IntegerField()
    month = models.IntegerField()
