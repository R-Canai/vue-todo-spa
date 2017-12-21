# coding: utf-8

from rest_framework import serializers

from .models import User, Task


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('name', 'mail')


class TaskSerializer(serializers.ModelSerializer):
  class Meta:
    model = Task
    fields = ('title', 'description', 'done', 'limit_date', 'author')
