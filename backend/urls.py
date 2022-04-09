from rest_framework import routers
from .api import DeepworkViewSet, ArrViewSet, TimeTrackerViewSet, SectionViewSet


router = routers.DefaultRouter()
router.register('api/project', DeepworkViewSet, 'project')
router.register('api/section', SectionViewSet, 'section')
router.register('api/arr', ArrViewSet, 'arr')
router.register('api/time', TimeTrackerViewSet, 'timetracker')

urlpatterns = router.urls
