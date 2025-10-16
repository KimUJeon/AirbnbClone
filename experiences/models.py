from django.db import models
from common.models import CommonModel

# Create your models here.


class Experience(CommonModel):
    """액티비티 모델"""

    name = models.CharField(max_length=120)
    country = models.CharField(
        max_length=50,
        default="대한민국",
    )
    city = models.CharField(
        max_length=80,
        default="서울",
    )
    host = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
    )

    price = models.PositiveIntegerField()
    address = models.CharField(max_length=250)
    start = models.TimeField()
    end = models.TimeField()
    description = models.TextField(
        max_length=250,
        blank=True,
        null=True,
    )
    perks = models.ManyToManyField(
        "experiences.Perk",
    )

    def __str__(self) -> str:
        return self.name


class Perk(CommonModel):
    """뭐가 포함되어 있게요?"""

    name = models.CharField(
        max_length=120,
    )
    detail = models.CharField(
        max_length=20,
    )
    description = models.TextField(
        max_length=200,
        blank=True,
        null=True,
    )

    def __str__(self) -> str:
        return self.name
