from django.utils import timezone
from rest_framework import serializers

from .models import Booking


class CreateRoomBookingSerializer(serializers.ModelSerializer):
    check_in = serializers.DateField()
    check_out = serializers.DateField()

    class Meta:
        model = Booking
        fields = (
            "check_in",
            "check_out",
            "guests",
        )

    def validate_check_in(self, value):
        now = timezone.localtime(timezone.now()).date()
        if now > value:
            raise serializers.ValidationError(
                "체크인 날짜는 오늘 이후의 날짜여야 합니다"
            )
        return value

    def validate_check_out(self, value):
        now = timezone.localtime(timezone.now()).date()
        if now > value:
            raise serializers.ValidationError(
                "체크아웃 날짜는 오늘 이후의 날짜여야 합니다"
            )
        return value

    def validate(self, data):
        room = self.context.get("room")
        if data["check_out"] <= data["check_in"]:
            raise serializers.ValidationError(
                "체크아웃 날짜는 체크인 날짜 이후여야 합니다."
            )
        if Booking.objects.filter(
            room=room,
            check_in__lt=data["check_out"],
            check_out__gt=data["check_in"],
        ).exists():
            raise serializers.ValidationError(
                "해당 일정(혹은 일부)가 이미 예약된 상태입니다."
            )
        return data


class PublicBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = (
            "pk",
            "check_in",
            "check_out",
            "experience_time",
            "guests",
        )
