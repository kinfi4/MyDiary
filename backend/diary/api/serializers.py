from rest_framework import serializers

from api.models import DailyRecord


class RecordSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=128, required=False)
    body = serializers.CharField(required=False)
    created = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        new_record = DailyRecord(**validated_data)

        return new_record

    def update(self, instance, validated_data):
        instance.__dict__.update(validated_data)

        return instance
