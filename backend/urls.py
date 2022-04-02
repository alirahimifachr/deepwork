from rest_framework import routers
from .api import BackendViewSet

router = routers.DefaultRouter()
router.register('api/backend', BackendViewSet, 'backend')

urlpatterns = router.urls
