from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getRoutes(request):
    routes = [
        'api/products',
        'api/products/create',
        'api/products/upload',
        'api/products/<id>',
        'api/products/<id>/reviews',
        'api/products/top',
        'api/products/delete/<id>',
        'api/products/update/<id>',
    ]
    return Response(routes)