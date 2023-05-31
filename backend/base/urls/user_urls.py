from django.urls import path
from ..views import user_views as views

urlpatterns = [
    path('', views.getUsers, name='users'),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUserProfile, name='user_profile'),
    path('profile/update/', views.updateUserProfile, name='user_update_profile'),
    path('register/', views.createUser, name='register'),
    
    path('delete/<str:pk>/', views.deleteUser, name='user-delete'),

    path('<str:pk>/', views.getUserById, name='user'),
]
