from django.shortcuts import render
from django.http import HttpResponse


def see_all_rooms(request):
    return HttpResponse("See all room")


def see_one_room(request, room_id):
    return HttpResponse(f"See one room: {room_id}")
