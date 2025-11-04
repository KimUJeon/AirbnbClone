from django.db import models
from common.models import CommonModel


# Create your models here.
class Category(CommonModel):
    """방 과 활동 카테고리"""

    class CategoryKindChoices(models.TextChoices):
        ROOMS = ("rooms", "Rooms")
        EXPERIENCES = ("experiences", "Experiences")

    name = models.CharField(max_length=50)
    kind = models.CharField(
        max_length=30,
        choices=CategoryKindChoices.choices,
    )

    def __str__(self):
        return f"{self.kind.title()}: {self.name}"

    class Meta:
        verbose_name_plural = "Categories"
