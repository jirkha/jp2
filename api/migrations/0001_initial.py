# Generated by Django 4.1 on 2022-08-22 15:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Material',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('quantity_of_material', models.IntegerField(blank=True, default=0)),
                ('price', models.IntegerField(blank=True, default=0)),
            ],
        ),
        migrations.CreateModel(
            name='MaterialType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Storage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day_of_storage', models.DateField()),
                ('quantity_of_material', models.PositiveIntegerField()),
                ('price', models.IntegerField()),
                ('shop', models.CharField(blank=True, max_length=256)),
                ('url', models.URLField(blank=True)),
                ('note', models.TextField(blank=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('material', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='materials', to='api.material')),
                ('material_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='material_types', to='api.materialtype')),
            ],
        ),
        migrations.CreateModel(
            name='Removal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day_of_removal', models.DateField()),
                ('quantity_of_material', models.PositiveIntegerField()),
                ('note', models.TextField(blank=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('material', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='removals', to='api.material')),
                ('material_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='removal_types', to='api.materialtype')),
            ],
        ),
        migrations.AddField(
            model_name='material',
            name='type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='types', to='api.materialtype'),
        ),
    ]
