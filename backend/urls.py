from rest_framework import routers
from .api import DeepworkViewSet, ArrViewSet, TimeTrackerViewSet

router = routers.DefaultRouter()
router.register('api/backend', DeepworkViewSet, 'backend')
router.register('api/arr', ArrViewSet, 'arr')
router.register('api/time', TimeTrackerViewSet, 'timetracker')

urlpatterns = router.urls
