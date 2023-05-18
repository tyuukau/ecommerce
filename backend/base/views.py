# from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .products import products

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
def getProducts(request):
    return Response(products)
    

@api_view(['GET'])
def getProduct(request, pk):
    product = None
    for prd in products:
        if prd["_id"] == pk:
            product = prd
            break
    return Response(product)
    