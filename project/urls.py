
from django.urls import path
from . import views  


urlpatterns = [
  path('home/', views.home, name='home'),

  path('medicine/', views.medicine, name='medicine'),
  path('fine-art/', views.fine_art, name='fine_art'),
  path('engineering/', views.engineering, name='engineering'),

  path('all-product/', views.all_product, name='all_product'),
  path('checkout/', views.checkout, name='checkout'),
  path('faqs-page/', views.faqs_page, name='faqs_page'),
  path('privacy-policy/', views.privacy_policy, name='privacy_policy'),
  path('return-refunds/', views.return_refunds, name='return_refunds'),
  
  ]