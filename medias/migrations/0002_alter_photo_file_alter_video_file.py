# Generated by Django 5.0.1 on 2024-03-06 08:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("medias", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="photo",
            name="file",
            field=models.URLField(),
        ),
        migrations.AlterField(
            model_name="video",
            name="file",
            field=models.URLField(),
        ),
    ]