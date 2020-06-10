from django.urls import path, include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()

router.register('category', views.CategoryView)
router.register('subscription', views.SubscriptionView)
router.register('history', views.HistoryView)

urlpatterns = [
    path('', include(router.urls))
]