from django.db import models

# Create your models here.
class User(models.Model):
  name = models.CharField(max_length=50)
  mail = models.EmailField()
  password = models.CharField(max_length=50)
  token = models.TextField()

  # 'Object' => pk: User name
  def __repr__(self):
    return '{}: {}'.format(self.pk, self.name)

  # set output str
  __str__ = __repr__

class Task(models.Model):
  title = models.CharField(max_length=250)
  description = models.TextField()
  done = models.BooleanField(
    default = False, null = False
  )
  limit_date = models.DateTimeField(
    blank = True, null = True
  )
  author = models.ForeignKey(User, related_name='tasks')
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
