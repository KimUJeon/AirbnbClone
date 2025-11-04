from django.db import models
from common.models import CommonModel


# Create your models here.
class ChattingRoom(CommonModel):
    """룸 모델 정의"""

    # 같은 이름을 가진 모델이 연결되면 문제가 생김
    users = models.ManyToManyField(
        "users.User",
    )

    def __str__(self) -> str:
        return f"채팅방"


class Message(CommonModel):
    text = models.TextField()
    user = models.ForeignKey(
        "users.User",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
    )

    room = models.ForeignKey(
        "dms.ChattingRoom",
        on_delete=models.CASCADE,
    )

    def __str__(self) -> str:
        return f"{self.user} 가 말함: {self.text}"
