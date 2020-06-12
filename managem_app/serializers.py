from rest_framework import serializers
 
from .models import Category, Subscription, History

class HistorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = History
        fields = '__all__'

class SubscriptionSerializer(serializers.ModelSerializer):
    records = HistorySerializer(many=True, read_only=True)
    class Meta:
        model = Subscription
        fields = ('id',
        'name',
        'due_date',
        'amount',
        'frequency',
        'image_url',
        'category',
        'records')

class CategorySerializer(serializers.ModelSerializer):
    subscriptions = SubscriptionSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ('id',
        'group',
        'subscriptions')

