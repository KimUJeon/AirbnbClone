from django.db import models


class CommonModel(models.Model):
    """Common Model Definition"""

    # 첫 생성시에만 적용됨
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    # 수정/생성 관계없이 액션 발생시 적용
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
