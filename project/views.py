from django.shortcuts import render 
from. models import product


def home(request):
    products =product.objects.all()
    return render (request, 'home.html',{'products':products})

def medicine (request):
    return render (request, 'Medicine.html',{})
def fine_art(request):
    return render (request, 'Fine_art.html',{})
def engineering (request):
    return render (request, 'Engineering.html',{})

def all_product(request):
    return render (request, 'All_product.html',{})
def checkout(request):
    return render (request, 'Checkout.html',{})
def faqs_page(request):
    return render (request, 'FAQs_page.html',{})
def privacy_policy(request):
    return render (request, 'Privacy_Policy.html',{})
def return_refunds(request):
    return render (request, 'Return_Refunds.html',{})















