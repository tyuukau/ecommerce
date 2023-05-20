# from django.shortcuts import render
from django.http import JsonResponse

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from ..models import Product
from django.contrib.auth.models import User
from ..serializers import ProductSerializer, UserSerializer, UserSerializerWithTokens
# from .products import products

from django.contrib.auth.hashers import make_password

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
