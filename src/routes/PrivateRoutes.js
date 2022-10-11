import { lazy } from 'react';
import AddEdit from '../pages/dashboard/AddEdit';

// project imports
// import MainLayout from 'layout/MainLayout';
// import Loadable from 'ui-component/Loadable';
// import Dashboard from '../pages/dashboard/Dashboard';

// dashboard routing
const DashboardDefault = lazy(() => import('../pages/dashboard/Dashboard'));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const PrivateRoutes = {
  path: '/',
  element: <DashboardDefault />,
  children: [
    {
      path: 'blog/add',
      element: <AddEdit />
    }
  ]
};

export default PrivateRoutes;