from django.shortcuts import render

import django_filters
from rest_framework import viewsets, filters

from .models import User, Task
from .serializer import UserSerializer, TaskSerializer


class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer


class TaskViewSet(viewsets.ModelViewSet):
  # TODO: Select my tasks only ...
  queryset = Task.objects.all()
  serializer_class = TaskSerializer
  filter_fields = ('author', 'done')
