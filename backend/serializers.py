from dataclasses import field
from rest_framework import serializers
from backend.models import Deepwork, Arr


class DeepworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deepwork
        fields = '__all__'


class ArrSerializer(serializers.ModelSerializer):
    class Meta:
        model = Arr
        fields = '__all__'
