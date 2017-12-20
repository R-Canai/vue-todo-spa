from django.contrib import admin

from .models import User, Task

# Register your models here.

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
  pass

@admin.register(Task)
class Task(admin.ModelAdmin):
  pass
