from django.db import models
from common.models import CommonModel


# Create your models here.
class Wishlist(CommonModel):
    """위시리스트 모델"""

    name = models.CharField(max_length=150)
    rooms = models.ManyToManyField(
        "rooms.Room",
        null=True,
        blank=True,
        related_name="wishlists",
    )
    experiences = models.ManyToManyField(
        "experiences.Experience",
        null=True,
        blank=True,
        related_name="wishlists",
    )
    # 위시리스트는 유저 한명만 소지 가능함 1:1 매칭
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="wishlists",
    )

    def __str__(self) -> str:
        return self.name
