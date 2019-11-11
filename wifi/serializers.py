from rest_framework import serializers
from wifi.models import AccessPoint, TimeSlice

class APSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccessPoint
        fields = ['building', 'name', 'count', 'id']

class TimeSliceSerializer(serializers.ModelSerializer):
    aps = APSerializer(many=True)

    class Meta:
        model = TimeSlice
        fields = ['id', 'datetime', 'aps']

    def create(self, validated_data):
        aps_data = validated_data.pop('aps')
        slice = TimeSlice.objects.create(**validated_data)
        for ap_data in aps_data:
            AccessPoint.objects.create(timeid=slice, **ap_data)
        return slice