"""django_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Import the include() function: from django.conf.urls import url, include
    3. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import url, include
from django.contrib import admin

from task import views

from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    url(r'^api/token-auth/$', obtain_jwt_token),
    url(r'^api/token-refresh/$', refresh_jwt_token),
    url(r'^api/token-verify/$', verify_jwt_token),

    # User endpoint
    url(r'^api/user/register/$', views.UserRegister.as_view()),
    url(r'^api/user/$', views.UserGetView.as_view()),

    # Tasks endpoint
    url(r'^api/tasks/$', views.TasksView.as_view()),
    url(r'^api/tasks/(?P<task_id>[0-9]*)/$', views.TasksView.as_view()),
    url(r'^api/tasks/(?P<task_id>[0-9]*)/toggle/$', views.TasksToggleView.as_view()),
]
