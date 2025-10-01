from django.db import models


# Create your models here.
class House(models.Model):
    """Model Definition for Houses"""

    # help_text => 선택지에 대한 힌트
    # verbose_name => 선택지의 이름을 지정 가능

    name = models.CharField(max_length=140)
    price = models.PositiveIntegerField(
        verbose_name="가격", help_text="양수만 입력 가능"
    )
    description = models.TextField()
    address = models.CharField(max_length=140)
    pets_allowed = models.BooleanField(
        default=True,
        verbose_name="반려동물 허용?",
        help_text="이 집은 반려동물을 허용합니까?",
    )

    owner = models.ForeignKey("users.User", on_delete=models.CASCADE)

    def __str__(self):
        return self.name
