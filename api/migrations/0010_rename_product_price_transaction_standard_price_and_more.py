# Generated by Django 4.1 on 2022-10-29 11:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_transaction_real_price'),
    ]

    operations = [
        migrations.RenameField(
            model_name='transaction',
            old_name='product_price',
            new_name='standard_price',
        ),
        migrations.RenameField(
            model_name='transaction',
            old_name='total_price',
            new_name='sum',
        ),
        migrations.RemoveField(
            model_name='transaction',
            name='difference_price',
        ),
    ]
