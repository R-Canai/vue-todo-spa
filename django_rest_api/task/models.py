from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have a email address')
        email = RacchaiUserManager.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        return self.create_user(email, password)

class User(AbstractBaseUser):
    email = models.EmailField(max_length=128, unique=True)
    description = models.TextField(blank=True)

    USERNAME_FIELD = 'email'

    objects = UserManager()

    # 'Object' => pk: User name
    def __repr__(self):
      return '{}: {}'.format(self.pk, self.name)

    # set output str
    __str__ = __repr__

    class Meta:
        db_table = 'user'
        swappable = 'AUTH_USER_MODEL'

class Task(models.Model):
  title = models.CharField(max_length=250)
  description = models.TextField(blank=True)
  done = models.BooleanField(
    default = False, null = False
  )
  limit_date = models.DateTimeField(
    blank = True, null = True
  )
  author = models.ForeignKey(User, related_name='tasks')
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
