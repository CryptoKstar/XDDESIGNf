import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './pages/dashboard';
import DashboardApp from './pages/DashboardApp';
import One from './pages/One';
import Two from './pages/Two';
import Three from './pages/Three';
import Four from './pages/Four';
import Five from './pages/Five';
import Six from './pages/Six';
import Seven from './pages/Seven';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'one', element: <One /> },
        { path: 'Two', element: <Two /> },
        { path: 'Three', element: <Three /> },
        { path: 'Four', element: <Four /> },
        { path: 'Five', element: <Five /> },
        { path: 'Six', element: <Six /> },
        { path: 'Seven', element: <Seven /> },
      ]
    }
  ]);
}
