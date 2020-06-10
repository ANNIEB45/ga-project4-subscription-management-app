from django.db import models

# Create your models here.

class Category(models.Model):
    group = models.CharField(max_length=250)
   
    def __str__(self):
        return self.group

class Subscription(models.Model):
    name = models.CharField(max_length=250)
    due_date = models.DateField(auto_now_add=True)
    amount = models.DecimalField(max_digits=5, decimal_places=2)
    frequency = models.CharField(max_length=250)
    image_url = models.TextField(blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='subscriptions')

    def __str__(self):
        return self.name



class History(models.Model):
    date = models.DateField(auto_now_add=True)
    amount = models.DecimalField(max_digits=5, decimal_places=2)
    payment_type = models.CharField(max_length=250)
    total_amt = models.DecimalField(max_digits=5, decimal_places=2)
    subscription = models.ForeignKey(Subscription, on_delete=models.CASCADE, related_name='records')

    def __str__(self):
        return str(self.subscription)
