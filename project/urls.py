
from django.urls import path
from . import views  


urlpatterns = [
  path('', views.home, name='home'),
  
  path('signin/', views.signin_user, name='signin'),
  path('signup/', views.signup_user, name='signup'),
  path('logout/', views.logout_user, name='logout'),
  
]