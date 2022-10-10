import { lazy } from 'react';

// project imports
// import MainLayout from 'layout/MainLayout';
// import Loadable from 'ui-component/Loadable';
// import Dashboard from '../pages/dashboard/Dashboard';

// Page routing
const HomePage = lazy(() => import('../pages/Home'));
const DescriptionPage = lazy(() => import('../pages/Description'));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const PublicRoutes = {
  path: '/',
  element: <HomePage />,
  children: [
    {
      children: [
        {
          path: '/blog/:id',
          element: <DescriptionPage />
        }
      ]
    }
  ]
};

export default PublicRoutes;