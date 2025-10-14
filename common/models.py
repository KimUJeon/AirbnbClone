from django.db import models


# Create your models here.
class CommonModel(models.Model):
    """Common Model 정의"""

    created_at = models.DateTimeField(
        auto_now_add=True,
        null=True,
    )
    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        # 코드를 재사용하기 위해 작성했음을 알리는것
        abstract = True
