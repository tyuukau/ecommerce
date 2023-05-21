# from django.shortcuts import render
from django.http import JsonResponse

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from ..models import Product
from django.contrib.auth.models import User
from ..serializers import UserSerializer, UserSerializerWithTokens
# from .products import products

from django.contrib.auth.hashers import make_password

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

@api_view(['POST'])
def createUser(request):
    data = request.data
    
    try:
        user = User.objects.create(
            first_name = data['name'], 
            username = data['email'], 
            email = data['email'],
            password = make_password(data['password']))
        
        serializer = UserSerializerWithTokens(user, many=False)
        # if serializer.is_valid( ):
        #     serializer.save()
        #     return Response(serializer.data, status=201)
        # return Response(serializer.errors, status=400)
        return Response(serializer.data, status=201)
    except:
        message = {'detail': 'User with this email address already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithTokens(user, many=False)
    
    data = request.data
    
    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']
    if data['password'] != '':
        user.password = make_password(data['password'])
        
    user.save()
    
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    # @classmethod
    # def get_token(cls, user):
    #     token = super().get_token(user)

    #     # Add custom claims
    #     token['username'] = user.username
    #     token['message'] = "Hello World"
    #     # ...

    #     return token
    def validate(self, attrs):
        data = super().validate(attrs)
        
        serializer = UserSerializerWithTokens(self.user).data
        for k, v in serializer.items():
            data[k] = v

        # refresh = self.get_token(self.user)

        # data["username"] = self.user.username
        # data["email"] = self.user.email

        # if api_settings.UPDATE_LAST_LOGIN:
        #     update_last_login(None, self.user)

        return data
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
