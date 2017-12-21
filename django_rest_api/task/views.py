# coding: utf-8

from django.shortcuts import render

import django_filters
from rest_framework import viewsets, filters

from .models import User, Task
from .serializer import UserSerializer, TaskSerializer


class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer


class TaskViewSet(viewsets.ModelViewSet):
  queryset = Task.objects.all()
  serializer_class = TaskSerializer
