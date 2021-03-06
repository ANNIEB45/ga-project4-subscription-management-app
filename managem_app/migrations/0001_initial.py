# Generated by Django 3.0.7 on 2020-06-09 22:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('group', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Subscription',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('due_date', models.DateField(auto_now_add=True)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=5)),
                ('frequency', models.CharField(max_length=250)),
                ('image_url', models.TextField(blank=True)),
                ('subscribe', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subscriptions', to='managem_app.Category')),
            ],
        ),
        migrations.CreateModel(
            name='History',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(auto_now_add=True)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=5)),
                ('payment_type', models.CharField(max_length=250)),
                ('total_amt', models.DecimalField(decimal_places=2, max_digits=5)),
                ('name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='records', to='managem_app.Subscription')),
            ],
        ),
    ]
