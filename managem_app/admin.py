from django.contrib import admin
from .models import Category, Subscription, History

# Register your models here.

admin.site.register(Category)
admin.site.register(Subscription)
admin.site.register(History)
