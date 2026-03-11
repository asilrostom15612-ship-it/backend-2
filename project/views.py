from django.shortcuts import render , redirect
from django.contrib.auth import authenticate, login ,logout
from django.contrib.auth.models import User
from django.contrib import messages 


def home(request):
    return render (request, 'home.html',{})

def signin_user (request):
    if request.method == "POST":
       username=request.POST['username']
       password=request.POST['password']
       user =authenticate(request,username=username, password=password)
       if user is not None:
        login(request,user)
        messages.success(request,("You have been logged in.")) 
        return redirect('home')
       else:
          messages.error(request,("There was an error ,please try again."))
          return redirect ('Sign-in')
    else:
     return render (request, 'Sign-in.html',{})


def logout_user (request):
    logout(request)
    messages.success(request, ("You hane been logged out."))
    return redirect('home')


def signup_user(request):
    if request.method == "POST":
       
       username=request.POST['username']
       password=request.POST['password']
       if User.objects.filter(username=username).exists():
          messages.error(request, ("Username already exists."))
          return redirect ('signin')
       else:
          user =User.objects.create_user(username=username, password=password)
          user.save()
          login(request,user)
          messages.success(request,("Account created successfully.")) 
          return redirect('home')
    else:
      return render(request,'Sign-in.html', {})














