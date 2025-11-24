from django.db import models
from common.models import CommonModel


# Create your models here.
class Photo(CommonModel):
    file = models.ImageField()
    description = models.CharField(
        max_length=140,
    )
    room = models.ForeignKey(
        "rooms.Room",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="photos",
    )

    experience = models.ForeignKey(
        "experiences.Experience",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="photos",
    )

    def __str__(self) -> str:
        return f"{self.file}"


class Video(CommonModel):
    file = models.FileField()
    # OneToOne 은 고유한 값으로 다른 값을 사용할 수 없음/다른 영상이 해당 활동에 할당될 수 없음
    experience = models.OneToOneField(
        "experiences.Experience",
        on_delete=models.CASCADE,
        related_name="videos",
    )

    def __str__(self) -> str:
        return "Video File"
