from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('events/', include('events.urls')),
    path('', include('authentication.urls')),
]
