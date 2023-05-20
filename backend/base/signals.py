from django.db.models.signals import pre_save
from django.contrib.auth.models import User

def updateUser(sender, instance, **kwargs):
    """
    This function updates the username of a user object based on their email address.
    
    :param sender: The model class that sent the signal (in this case, the User model)
    :param instance: The instance parameter refers to the instance of the model that triggered 
    the signal. In this case, it is a User instance. The signal is triggered whenever a user 
    model 
    instance is updated.
    """
    print('Signal triggered')
    
    # Auto update user name according to user email
    user = instance
    if user.email != '':
        user.username = user.email
    
# `pre_save.connect(updateUser, sender=User)` is connecting the `updateUser` function to the
# `pre_save` signal of the `User` model. This means that whenever a `User` instance is about to be
# saved, the `updateUser` function will be called to update the username based on the email address.
pre_save.connect(updateUser, sender=User)