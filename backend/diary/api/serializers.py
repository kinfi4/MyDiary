from rest_framework import serializers

from api import helpers


class RecordGetCreateSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(max_length=128, required=False, allow_blank=True)
    body = serializers.CharField(required=False)
    created = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        new_record = helpers.create_record(**validated_data)
        return new_record

    def update(self, instance, validated_data):
        pass


class RecordUpdateSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=128, required=False)
    body = serializers.CharField(required=False)

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        instance.__dict__.update(validated_data)
        instance.save()

        return instance

