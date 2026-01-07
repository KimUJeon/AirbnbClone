from django.db import models
from common.models import CommonModel


# Create your models here.
class Room(CommonModel):
    """
    룸 모델 정의
    """

    class RoomKindChoices(models.TextChoices):
        ENTIRE_PLACE = ("entire", "Entire Place")
        PRIVATE_ROOM = ("private", "Private Room")
        SHARED_ROOM = ("shared", "Shared Room")

    name = models.CharField(
        max_length=100,
        default="",
    )

    country = models.CharField(
        max_length=50,
        default="대한민국",
    )
    city = models.CharField(
        max_length=80,
        default="서울",
    )
    price = models.PositiveIntegerField()
    rooms = models.PositiveIntegerField()
    toilets = models.PositiveIntegerField()
    description = models.TextField()
    address = models.CharField(
        max_length=200,
    )
    pet_friendly = models.BooleanField(
        default=False,
    )
    kind = models.CharField(
        max_length=20,
        choices=RoomKindChoices.choices,
    )
    # CASCADE => 유저가 삭제될때 해당 방도 삭제됨
    owner = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="rooms",
    )
    amenities = models.ManyToManyField(
        "rooms.Amenity",
        related_name="rooms",
    )

    category = models.ForeignKey(
        "categories.Category",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="rooms",
    )

    def __str__(self) -> str:
        return self.name

    def total_amenities(room):
        return room.amenities.count()

    def rating(room):
        count = room.reviews.count()
        if count == 0:
            return "리뷰 없음"
        else:
            total_rating = 0
            for review in room.reviews.all().values("rating"):
                total_rating += review["rating"]

            return round(total_rating / count, 2)


class Amenity(CommonModel):
    """어메니티 정의"""

    name = models.CharField(
        max_length=150,
    )
    description = models.CharField(
        max_length=150,
        null=True,
        blank=True,
    )

    def __str__(self) -> str:
        return self.name

    class Meta:
        # 복수형 이름을 지정가능
        verbose_name_plural = "Amenities"
