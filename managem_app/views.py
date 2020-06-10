from rest_framework import viewsets

from .serializers import HistorySerializer, SubscriptionSerializer, CategorySerializer
from .models import History, Subscription, Category

# Create your views here.


class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class SubscriptionView(viewsets.ModelViewSet):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer


class HistoryView(viewsets.ModelViewSet):
    queryset = History.objects.all()
    serializer_class = HistorySerializer






