# Generated by Django 2.2.6 on 2019-11-10 01:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TimeSlice',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('datetime', models.DateTimeField()),
            ],
            options={
                'get_latest_by': '-datetime',
            },
        ),
        migrations.CreateModel(
            name='AccessPoint',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=20)),
                ('building', models.CharField(max_length=20)),
                ('count', models.IntegerField(default=0)),
                ('timeid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wifi.TimeSlice')),
            ],
            options={
                'ordering': ['building'],
            },
        ),
    ]
