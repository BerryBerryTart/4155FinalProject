from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from wifi.models import AccessPoint, TimeSlice
from wifi.serializers import APSerializer, TimeSliceSerializer

# Create your views here.
"""Gets the latest access point count"""
class CurrAPList(APIView):
    def get(self, request, format=None):
        latest_time_slice = TimeSlice.objects.order_by('datetime')[0]
        serializer = TimeSliceSerializer(latest_time_slice)
        return Response(serializer.data)

"""Manages Time Segements (slices)"""
class TimeSlices(APIView):
    """Get All Slices"""
    def get(self, request, format=None):
        slices = TimeSlice.objects.all()
        serializer = TimeSliceSerializer(slices, many=True)
        return Response(serializer.data)

    """View All SLices"""
    def post(self, request, format=None):
        serializer = TimeSliceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ImportAPs(APIView):
    def post():
        pass

