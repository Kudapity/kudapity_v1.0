from django.urls import path, include
from authentication.views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView, TokenVerifyView
)


urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
