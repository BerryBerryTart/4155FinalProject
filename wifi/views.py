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

    """Add New Slice"""
    def post(self, request, format=None):
        serializer = TimeSliceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class APDetailView(APIView):
    def get(self, request, timeid, format=None):
        aps = AccessPoint.objects.all().filter(timeid=timeid)
        serializer = APSerializer(aps, many=True)
        return Response(serializer.data)

class APBulkView(APIView):
    def post(self, request, format=None):
        serializer = APSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


