# Generated by Django 4.1 on 2022-10-21 15:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_product_producttype_sale_saletype_transaction_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='ItemPart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveIntegerField(default=1)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='item_parts', to='api.item')),
            ],
        ),
        migrations.AlterField(
            model_name='product',
            name='items',
            field=models.ManyToManyField(blank=True, related_name='product_items', to='api.itempart'),
        ),
    ]
