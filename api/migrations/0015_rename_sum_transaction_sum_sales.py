# Generated by Django 4.1 on 2022-11-13 21:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_alter_producttype_options_sale_amount_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='transaction',
            old_name='sum',
            new_name='sum_sales',
        ),
    ]
