from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
import json


# Create your views here.

def index(request):
    return HttpResponse("<h3>Hello World</h3>")


def echo(request):
    if(request.method=="GET"):
        return HttpResponse("<h2>Echoing..</h2>")
    elif(request.method=="POST"):
        print(request.body)
        if request.is_ajax():
            try:
                data= json.loads(request.body)
                print("Hello "+data['fname'])
                return JsonResponse({
                    "status": "success",
                    "data": data
                })
            except Exception as e:
                print("error while parsing json")
                return JsonResponse({
                    "status": "error",
                    "error": str(e)
                })
        
