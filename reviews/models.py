from django.db import models
from common.models import CommonModel


# Create your models here.
class Review(CommonModel):
    """유저가 룸이나 액티비티에 남긴 리뷰"""

    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
    )

    room = models.ForeignKey(
        "rooms.Room",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
    )

    experience = models.ForeignKey(
        "experiences.Experience",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
    )

    payload = models.TextField(
        max_length=200,
    )
    rating = models.PositiveIntegerField()

    def __str__(self) -> str:
        return f"{self.user} 작성 / {self.rating} 점!"
