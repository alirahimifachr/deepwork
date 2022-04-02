from backend.models import Deepwork
from backend.models import TimeTracker
from rest_framework import viewsets, permissions
from .serializers import DeepworkSerializer


class BackendViewSet(viewsets.ModelViewSet):
    queryset = Deepwork.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = DeepworkSerializer
