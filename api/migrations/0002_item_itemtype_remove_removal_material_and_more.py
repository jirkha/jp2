# Generated by Django 4.1 on 2022-08-24 14:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('costs', models.PositiveIntegerField()),
                ('quantity_of_material', models.IntegerField(blank=True, default=0)),
                ('supplier', models.CharField(blank=True, max_length=256)),
                ('link', models.URLField(blank=True, null=True)),
                ('note', models.TextField(blank=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='ItemType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='removal',
            name='material',
        ),
        migrations.RemoveField(
            model_name='removal',
            name='material_type',
        ),
        migrations.RemoveField(
            model_name='storage',
            name='material',
        ),
        migrations.RemoveField(
            model_name='storage',
            name='material_type',
        ),
        migrations.RemoveField(
            model_name='storage',
            name='shop',
        ),
        migrations.RemoveField(
            model_name='storage',
            name='url',
        ),
        migrations.AddField(
            model_name='removal',
            name='price',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AddField(
            model_name='removal',
            name='updated',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='storage',
            name='updated',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='removal',
            name='note',
            field=models.TextField(blank=True, default=None),
        ),
        migrations.AlterField(
            model_name='storage',
            name='note',
            field=models.TextField(blank=True, default=None),
        ),
        migrations.AlterField(
            model_name='storage',
            name='price',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.DeleteModel(
            name='Material',
        ),
        migrations.DeleteModel(
            name='MaterialType',
        ),
        migrations.AddField(
            model_name='item',
            name='type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='types', to='api.itemtype'),
        ),
        migrations.AddField(
            model_name='removal',
            name='item',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='items_r', to='api.item'),
        ),
        migrations.AddField(
            model_name='removal',
            name='item_type',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='item_types_r', to='api.itemtype'),
        ),
        migrations.AddField(
            model_name='storage',
            name='item',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='items_s', to='api.item'),
        ),
        migrations.AddField(
            model_name='storage',
            name='item_type',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='item_types_s', to='api.itemtype'),
        ),
    ]
