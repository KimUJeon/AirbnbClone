from django.contrib import admin
from .models import House

# ModelAdmin과 동일한 class가 생성된 것
@admin.register(House)
class HouseAdmin(admin.ModelAdmin):
    list_display = ["name", "price_per_night", "address", "pets_allowed"]
    list_filter = ["price_per_night", "pets_allowed"]
    # __startswith 을 붙이면 해당 단어로 시작하는 데이터만 탐색함
    search_fields = ["address"]