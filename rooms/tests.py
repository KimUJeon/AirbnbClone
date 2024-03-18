from rest_framework.test import APITestCase
from . import models
from users.models import User


class TestAmenities(APITestCase):
    NAME = "Amenity Test"
    DESCRIP = "Amenity Test"
    URL = "/api/v1/rooms/amenities/"

    def setUp(self) -> None:
        models.Amenity.objects.create(
            name=self.NAME,
            description=self.DESCRIP,
        )

    def test_all_amenities(self):
        response = self.client.get(self.URL)
        data = response.json()

        self.assertEqual(
            response.status_code,
            200,
            "Status code isn't 200.",
        )
        self.assertIsInstance(
            data,
            list,
        )
        self.assertEqual(
            len(data),
            1,
        )
        self.assertEqual(
            data[0]["name"],
            self.NAME,
        )
        self.assertEqual(
            data[0]["description"],
            self.DESCRIP,
        )

    def test_create_amenity(self):
        new_amenity_name = "New Amenity"
        new_amenity_description = "New Description"

        response = self.client.post(
            self.URL,
            data={
                "name": new_amenity_name,
                "description": new_amenity_description,
            },
        )

        data = response.json()
        self.assertEqual(
            response.status_code,
            200,
            "Not 200 status code",
        )

        self.assertEqual(
            data["name"],
            new_amenity_name,
            "Not Matching name",
        )

        self.assertEqual(
            data["description"],
            new_amenity_description,
            "Not Matching Description",
        )

        response = self.client.post(self.URL)
        data = response.json()

        self.assertEqual(
            response.status_code,
            400,
        )

        self.assertIn(
            "name",
            data,
        )


class TestAmenity(APITestCase):
    NAME = "Test Amenity"
    DESC = "Test Description"

    def setUp(self):
        models.Amenity.objects.create(
            name=self.NAME,
            description=self.DESC,
        )

    def test_amenity_not_found(self):
        response = self.client.get("/api/v1/rooms/amenities/2")
        self.assertEqual(response.status_code, 404)

    def test_get_amenity(self):
        response = self.client.get("/api/v1/rooms/amenities/1")
        self.assertEqual(response.status_code, 200)

        data = response.json()
        self.assertEqual(data["name"], self.NAME)
        self.assertEqual(data["description"], self.DESC)

    def test_put_amenity(self):
        response = self.client.put(
            "/api/v1/rooms/amenities/1",
            data={
                "name": "안녕",
            },
        )
        self.assertEqual(response.status_code, 200)

        name_over_150 = "1" * 200
        name_valid_response = self.client.put(
            "api/v1/rooms/amenities/1",
            data={
                "name": name_over_150,
            },
        )
        self.assertEqual(name_valid_response.status_code, 404)

    def test_delete_amenity(self):
        response = self.client.delete("/api/v1/rooms/amenities/1")
        self.assertEqual(response.status_code, 204)


class TestRooms(APITestCase):

    def setUp(self):
        user = User.objects.create(
            username="test",
        )
        user.set_password("123")
        user.save()

        self.user = user

    def test_create_room(self):
        # 403 표기가 된다면 권한 없음이 잘 작동중임
        response = self.client.post("/api/v1/rooms/")
        self.assertEqual(response.status_code, 403)
        # force login 방식은 인증 방법 테스트 할때만 이용하는것이 좋음
        # 실제 데이터를 생성할때는 login을 통해 하는것이 좋음
        self.client.force_login(self.user)

        response = self.client.post("/api/v1/rooms/")
        print(response.json())
