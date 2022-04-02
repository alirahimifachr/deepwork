from rest_framework import routers
from .api import DeepworkViewSet, ArrViewSet

router = routers.DefaultRouter()
router.register('api/backend', DeepworkViewSet, 'backend')
router.register('api/arr', ArrViewSet, 'arr')

urlpatterns = router.urls
