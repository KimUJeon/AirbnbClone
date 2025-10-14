from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


# Register your models here.
@admin.register(User)
class CustomUserAdmin(UserAdmin):
    # 필드셋은 튜플로 되어야 함
    fieldsets = (
        (
            "Profile",
            {
                "fields": (
                    "profile_photo",
                    "username",
                    "password",
                    "name",
                    "email",
                    "is_host",
                    "gender",
                    "language",
                    "currency",
                )
            },
        ),
        (
            "Permission",
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
                "classes": ("collapse",),
            },
        ),
        (
            "Important dates",
            {
                "fields": (
                    "last_login",
                    "date_joined",
                ),
                # collapse 사용시 기본 감추기, wide는 가로 방향으로 공간을 추가함
                "classes": ("collapse",),
            },
        ),
    )

    list_display = (
        "username",
        "email",
        "name",
    )
