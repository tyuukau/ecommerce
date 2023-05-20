# from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .models import Product
from django.contrib.auth.models import User
from .serializers import ProductSerializer, UserSerializer, UserSerializerWithTokens
# from .products import products

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products',
        'api/products/create',
        'api/products/upload',
        'api/products/<id>',
        'api/products/<id>/reviews',
        'api/products/top',
        'api/products/delete/<id>',
        'api/products/update/<id>',
    ]
    return Response(routes)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
    
@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
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
    
