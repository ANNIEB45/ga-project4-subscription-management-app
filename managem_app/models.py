from django.db import models

# Create your models here.

class Subscription(models.Model):
    name = models.CharField(max_length=250)
    due_date = models.DateField(auto_now_add=True)
    amount = models.DecimalField(default=0, max_digits=5, decimal_places=2)
    frequency = models.CharField(max_length=250)
    image_url = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Category(models.Model):
    group = models.CharField(max_length=250)

    def __str__(self):
        return self.group

class History(models.Model):
    date = models.DateField(auto_now_add=True)
    amount = models.DecimalField(max_digits=5, decimal_places=2)
    payment_type = models.CharField(max_length=250)
    total_amt = models.DecimalField(max_digits=5, decimal_places=2)
    