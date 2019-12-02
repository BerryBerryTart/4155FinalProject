from django.db import models

# Create your models here.
class AccessPoint(models.Model):
    id = models.AutoField(primary_key=True)
    timeid = models.ForeignKey('TimeSlice', on_delete=models.CASCADE, related_name='aps')
    name = models.CharField(max_length=50)
    building = models.CharField(max_length=50)
    count = models.IntegerField(default=0)

    class Meta:
        ordering = ['building']

class TimeSlice(models.Model):
    id = models.AutoField(primary_key=True)
    datetime = models.DateTimeField()

    class Meta:
        get_latest_by = '-datetime'
        ordering = ['datetime']

class AverageByHour(models.Model):
    id = models.AutoField(primary_key=True)
    ap_id = models.ForeignKey('AverageByName', on_delete=models.CASCADE, related_name='averages')
    hour = models.IntegerField()
    count = models.IntegerField()

    class Meta:
        ordering = ['hour']

class AverageByName(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, unique=True)