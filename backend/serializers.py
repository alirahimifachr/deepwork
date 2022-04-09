from dataclasses import field
from rest_framework import serializers
from backend.models import Deepwork, Arr, TimeTracker, Section


class DeepworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deepwork
        fields = '__all__'


class ArrSerializer(serializers.ModelSerializer):
    class Meta:
        model = Arr
        fields = '__all__'


class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = '__all__'


class TimeTrackerSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeTracker
        fields = '__all__'
