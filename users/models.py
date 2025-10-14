from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class User(AbstractUser):
    class GenderChoices(models.TextChoices):
        MALE = ("male", "Male")
        FEMALE = ("female", "Female")

    class LanguageChoices(models.TextChoices):
        # 첫번째 레이블이 데이터베이스 저장, 두번째가 보이는 값
        KR = ("kr", "Korean")
        EN = ("en", "English")

    class CurrencyChoices(models.TextChoices):
        WON = "won", "Korean Won"
        USD = "usd", "US Dollar"

    first_name = models.CharField(
        max_length=50,
        editable=True,
    )
    last_name = models.CharField(
        max_length=50,
        editable=True,
    )
    profile_photo = models.ImageField(blank=True)
    name = models.CharField(
        max_length=50,
        default="",
    )
    is_host = models.BooleanField(
        default=False,
    )
    gender = models.CharField(
        max_length=10,
        choices=GenderChoices.choices,
    )
    language = models.CharField(
        max_length=2,
        choices=LanguageChoices.choices,
    )

    currency = models.CharField(
        max_length=3,
        choices=CurrencyChoices.choices,
    )
