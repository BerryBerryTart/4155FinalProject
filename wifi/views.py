from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from wifi.models import AccessPoint, TimeSlice
from wifi.serializers import APSerializer, TimeSliceSerializer, MinTimeSliceSerializer


# Create your views here.
"""Gets the latest access point count"""
class CurrAPList(APIView):
    def get(self, request, format=None):
        try:
            latest_time_slice = TimeSlice.objects.order_by('-datetime')[0]
            serializer = TimeSliceSerializer(latest_time_slice)
            return Response(serializer.data)
        except IndexError:
            return Response(status=status.HTTP_400_BAD_REQUEST)


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

class DetailView(APIView):
    def get_object(self, pk):
        try:
            return TimeSlice.objects.get(pk=pk)
        except TimeSlice.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        slice = self.get_object(pk)
        serializer = TimeSliceSerializer(slice)
        return Response(serializer.data)

    def delete(self, request, pk, format=None):
        slice = self.get_object(pk)
        slice.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class MinTimeSliceView(APIView):
    def get(self, request, format=None):
        slices = TimeSlice.objects.all()
        serializer = MinTimeSliceSerializer(slices, many=True)
        return Response(serializer.data)
