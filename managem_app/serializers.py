from rest_framework import serializers
 
from .models import Category, Subscription, History

class HistorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = History
        fields = ('id',
        'date',
        'payment_type',
        'total_amt')

class SubscriptionSerializer(serializers.ModelSerializer):
    histories = HistorySerializer(many=True, read_only=True)
    class Meta:
        model = Subscription
        fields = ('id',
        'due_date',
        'amount',
        'frequency',
        'image_url',
        'histories')

class CategorySerializer(serializers.ModelSerializer):
    subscriptions = SubscriptionSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ('id',
        'group',
        'subscriptions')

