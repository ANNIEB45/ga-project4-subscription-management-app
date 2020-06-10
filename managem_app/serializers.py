from rest_framework import serializers
 
from .models import Category, Subscription, History

class HistorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model: History
        field: ('id',
        'date',
        'amount',
        'payment_type',
        'total_amt',
        'subscription')

class SubscriptionSerializer(serializers.ModelSerializer):
    histories = HistorySerializer(many=True, read_only=True)
    
    class Meta:
        model: Subscription
        field: ('id',
        'due_date',
        'amount',
        'frequency',
        'image_url',
        'category')

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model: Category
        field: '__all__'

class HomeSerializer(serializers.ModelSerializer):

    class Meta:
        model: Subscription
        field: ('id',
        'due_date',
        'amount',
        'image_url',
        'category')