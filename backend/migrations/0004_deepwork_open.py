# Generated by Django 4.0.3 on 2022-04-02 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_remove_deepwork_tasks_arr_completed_arr_parent'),
    ]

    operations = [
        migrations.AddField(
            model_name='deepwork',
            name='open',
            field=models.BooleanField(default=False),
        ),
    ]