from django.db.models.signals import pre_save
from django.contrib.auth.models import User

def updateUser(sender, instance, **kwargs):
    print('Signal triggered')
    
    # Auto update user name according to user email
    user = instance
    if user.email != '':
        user.username = user.email
    
pre_save.connect(updateUser, sender=User)