from backend.models import Deepwork, Arr
from rest_framework import viewsets, permissions
from .serializers import DeepworkSerializer, ArrSerializer


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
