from django.contrib import admin

from .models import *

# These lines of code are registering the various models with the Django admin site. 
# This allows the admin to view, add, edit, and delete instances of these models 
# through the admin interface.
admin.site.register(Product)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)