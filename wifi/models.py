from django.db import models

# Create your models here.
class AccessPoint(models.Model):
    id = models.AutoField(primary_key=True)
    timeid = models.ForeignKey('TimeSlice', on_delete=models.CASCADE,)
    name = models.CharField(max_length=20)
    building = models.CharField(max_length=20)
    count = models.IntegerField(default=0)

    class Meta:
        ordering = ['building']

class TimeSlice(models.Model):
    id = models.AutoField(primary_key=True)
    datetime = models.DateTimeField()

    class Meta:
        get_latest_by = '-datetime'