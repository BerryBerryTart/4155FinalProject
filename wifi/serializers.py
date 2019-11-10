from rest_framework import serializers
from wifi.models import AccessPoint, TimeSlice

class APSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccessPoint
        fields = ['building', 'name', 'count', 'id']

class TimeSliceSerializer(serializers.ModelSerializer):
    aps = APSerializer(many=True, read_only=True)

    class Meta:
        model = TimeSlice
        fields = ['id', 'datetime', 'aps']

