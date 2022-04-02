from django.db import models


class Deepwork(models.Model):
    project = models.CharField(max_length=100)
    tasks = models.CharField(max_length=100)


class TimeTracker(models.Model):
    date = models.DateField()
    today = models.IntegerField()
    week = models.IntegerField()
    month = models.IntegerField()
