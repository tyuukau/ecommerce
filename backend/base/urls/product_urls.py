from django.urls import path
from ..views import product_views as views

urlpatterns = [
    path('', views.getProducts, name='products'),
    
    path('create/', views.createProduct, name="product-create"),
    path('delete/<str:pk>/', views.deleteProduct, name='product-delete'),

    path('<str:pk>/', views.getProduct, name='product'),
]