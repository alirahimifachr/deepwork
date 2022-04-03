from backend.models import Deepwork, Arr, TimeTracker
from rest_framework import viewsets, permissions
from .serializers import DeepworkSerializer, ArrSerializer, TimeTrackerSerializer


class DeepworkViewSet(viewsets.ModelViewSet):
    queryset = Deepwork.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = DeepworkSerializer


class ArrViewSet(viewsets.ModelViewSet):
    queryset = Arr.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ArrSerializer


class TimeTrackerViewSet(viewsets.ModelViewSet):
    queryset = TimeTracker.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TimeTrackerSerializer
