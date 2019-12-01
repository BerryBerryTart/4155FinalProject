from rest_framework import serializers
from wifi.models import AccessPoint, TimeSlice, AverageByHour, AverageByName

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
        objs = []
        aps_data = validated_data.pop('aps')
        slice = TimeSlice.objects.create(**validated_data)
        for ap_data in aps_data:
            ap = AccessPoint(timeid=slice, **ap_data)
            objs.append(ap)
        AccessPoint.objects.bulk_create(objs)
        return slice

class MinTimeSliceSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeSlice
        fields = ['id', 'datetime']

class AverageByHourSerializer(serializers.ModelSerializer):
    class Meta:
        model = AverageByHour
        fields = ['id', 'hour', 'count']

class MinAverageByNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = AverageByName
        fields = ['id', 'name']

class AverageByNameSerializer(serializers.ModelSerializer):
    averages = AverageByHourSerializer(many=True)

    class Meta:
        model = AverageByName
        fields = ['id', 'name', 'averages']

    def create(self, validated_data):
        objs = []
        aps_hours_data = validated_data.pop('averages')
        point = AverageByName.objects.create(**validated_data)
        for hours_data in aps_hours_data:
            ap = AverageByHour(ap_id=point, **hours_data)
            objs.append(ap)
        AverageByHour.objects.bulk_create(objs)
        return point