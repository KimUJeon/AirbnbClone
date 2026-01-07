from django.contrib import admin
from .models import Room, Amenity

# Register your models here.


@admin.action(description="모든 가격을 0 으로 만들기")
def reset_prices(model_admin, request, queryset):
    for room in rooms.all():
        room.price = 0
        room.save()


@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):

    actions = (reset_prices,)

    list_display = (
        "name",
        "price",
        "city",
        "country",
        "total_amenities",
        "rating",
        "owner",
    )

    list_filter = (
        "city",
        "amenities",
        "price",
        "owner",
    )

    search_fields = (
        # ^ 를 사용하면 시작하는 단어를 찾음, = 는 완벽히 동일할때
        "name",
        "price",
        "owner__username",
    )


@admin.register(Amenity)
class AmenityAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "description",
        "created_at",
        "updated_at",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )
