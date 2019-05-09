from django.shortcuts import render
from django.utils.safestring import mark_safe
import json
import requests 

def index(request):
    return render(request, 'chat/index.html', {})

def room(request, room_name):
    response = requests.get('http://119.205.235.198:8999/omok/746')
    cordidata = response.json()
    return render(request, 'chat/room.html', {
            'room_name_json': mark_safe(json.dumps(room_name)),
            'id': mark_safe(json.dumps(cordidata['id'])),
            'x': mark_safe(json.dumps(cordidata['x'])),
            'y': mark_safe(json.dumps(cordidata['y']))
            })
