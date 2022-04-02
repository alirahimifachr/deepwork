from dataclasses import field
from rest_framework import serializers
from backend.models import Deepwork


class DeepworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deepwork
        fields = '__all__'
