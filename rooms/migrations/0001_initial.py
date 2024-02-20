# Generated by Django 5.0.1 on 2024-02-20 07:42

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Amenity",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=150)),
                ("description", models.CharField(default="", max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name="Room",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("country", models.CharField(default="한국", max_length=50)),
                ("city", models.CharField(default="서울", max_length=80)),
                ("price", models.PositiveIntegerField()),
                ("rooms", models.PositiveIntegerField()),
                ("toilets", models.PositiveIntegerField()),
                ("description", models.TextField()),
                ("address", models.CharField(max_length=250)),
                ("pet_friendly", models.BooleanField(default=True)),
                (
                    "kind",
                    models.CharField(
                        choices=[
                            ("entire_place", "Entire Place"),
                            ("private_room", "Private Room"),
                            ("shared_room", "Shared Room"),
                        ],
                        max_length=20,
                    ),
                ),
                ("amenities", models.ManyToManyField(to="rooms.amenity")),
                (
                    "owner",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
