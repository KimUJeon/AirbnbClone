from django.contrib import admin
from .models import ChattingRoom, Message


@admin.register(ChattingRoom)
class RoomAdmin(admin.ModelAdmin):
    list_display = (
        "__str__",
        "created_at",
        "updated_at",
    )


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = (
        "room",
        "text",
        "user",
        "created_at",
    )
