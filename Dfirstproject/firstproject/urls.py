from django.contrib import admin
from django.urls import path, include
import polls.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',polls.views.home,name='hello_world'),
    path('test/',polls.views.test, name='write_test'),
]
