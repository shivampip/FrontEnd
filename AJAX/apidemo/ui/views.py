from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, "index.html")


def text(request):
    return render(request, "text.html")

def rating(request):
    return render(request, "rating.html")

    
def slider(request):
    return render(request, "slider.html")


def dialog(request):
    return render(request, "dialog.html")


def progress(request):
    return render(request, "progress.html")