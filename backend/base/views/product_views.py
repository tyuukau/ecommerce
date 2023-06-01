# from django.shortcuts import render
from django.http import JsonResponse

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from ..models import Product
from ..serializers import ProductSerializer
# from .products import products

@api_view(['GET'])
def getProducts(request):
    """
    This function retrieves all products from the database and returns them as serialized data in a
    response object.
    
    :param request: The HTTP request object that contains information about the incoming request, such
    as the request method, headers, and query parameters
    :return: The function `getProducts` returns a response object containing serialized data of all the
    products in the database. The data is serialized using the `ProductSerializer` class and is returned
    in JSON format.
    """
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
    
@api_view(['GET'])
def getProduct(request, pk):
    """
    This function retrieves a single product object by its primary key and returns its serialized data.
    
    :param request: The HTTP request object that contains information about the incoming request, such
    as the request method, headers, and query parameters
    :param pk: pk stands for "primary key". In this context, it refers to the unique identifier of a
    specific product in the database. This view is designed to retrieve the details of a single product
    based on its primary key
    :return: a serialized representation of a single product object with the given primary key (pk) in
    the request.
    """
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, pk):
    product = Product.objects.get(_id=pk)
    product.delete()
    return Response('Producted Deleted')
