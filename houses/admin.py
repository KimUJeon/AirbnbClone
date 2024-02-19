from django.contrib import admin
from .models import House

# ModelAdmin과 동일한 class가 생성된 것
@admin.register(House)
class HouseAdmin(admin.ModelAdmin):
    pass