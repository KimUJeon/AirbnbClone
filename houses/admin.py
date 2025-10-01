from django.contrib import admin
from .models import House

# Register your models here.


@admin.register(House)
class HouseAdmin(admin.ModelAdmin):
    # 장고에선 리스트를 잘 사용하지 않음. 또한, 튜플에서 원소가 한개밖에 없는경우 마지막 원소에는 콤마를 써야함
    # exclude_list => 어드민 패널에서 수정 못하게 막기

    fields = (
        "name",
        "address",
        ("price", "pets_allowed"),
        "owner",
    )

    # 모델의 이름을 적어서 어드민 패널에 표시할 항목을 선택가능함
    list_display = ("name", "price", "address", "pets_allowed")

    # 어드민 패널에서 필터를 설정할 수 있도록 함
    list_filter = ("price", "pets_allowed")

    # 특정 카데고리로 검색이 가능하게 함
    # startswith 은 해당 텍스트로 시작하는 것을 검색하기 위함
    search_fields = ("addres__startswith",)

    # 특정 항목을 눌렀을때 이동이 가능함
    list_display_links = ("name", "address")
