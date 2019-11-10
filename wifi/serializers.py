from rest_framework import serializers
from wifi.models import AccessPoint, TimeSlice

class APSerializer(serializers.ModelSerializer):
    category_name = serializers.RelatedField(source='TimeSlice', read_only=True)

    class Meta:
        model = AccessPoint
        fields = ['building', 'name', 'count']

class TimeSliceSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeSlice
        fields = ['id', 'datetime']