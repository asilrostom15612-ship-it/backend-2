from django.shortcuts import render , redirect
from django.contrib.auth import authenticate, login ,logout
from django.contrib.auth.models import User
from django.contrib import messages 



# singin 
def signin_user (request):
    if request.method == "POST":
       email=request.POST.get('email')
       password=request.POST.get('password')
       try:
            user_obj = User.objects.get(email=email)
            username = user_obj.username  
       except User.DoesNotExist:
            messages.error(request, ("There was an error, please try again."))
            return redirect('signin')
       user =authenticate(request, username=username, password=password)
       if user is not None:
        login(request,user)
        messages.success(request,("You have been logged in.")) 
        return redirect('home')
       else:
          messages.error(request,("There was an error ,please try again."))
          return redirect ('signin')
    else:
     return render (request, 'users/Sign-in.html',{})

# logout
def logout_user (request):
    logout(request)
    messages.success(request, ("You have been logged out."))
    return redirect('home')

# signup
def signup_user(request):
    if request.method == "POST":
       username = request.POST.get('username')
       email=request.POST.get('email')
       password=request.POST.get('password')

       
       if not username:
           username = email

      
       if not username or not password:
          messages.error(request, "Username and password are required.")
          return redirect('signin')


       if User.objects.filter(email=email).exists():
          messages.error(request, ("Your Email already exists."))
          return redirect ('signin')
       
       if User.objects.filter(username=username).exists():
            messages.error(request, ("This username is already taken."))
            return redirect('signin')
       
       user =User.objects.create_user(username=username,email=email, password=password)
       user.save()
       login(request,user)
       messages.success(request,("Account created successfully.")) 
       return redirect('home')
    else:
      return render(request,'users/Sign-in.html', {})