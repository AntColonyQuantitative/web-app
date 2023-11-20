import Dashboard from '@/containers/Dashboard';
import ExchangeManagement from '@/containers/ExchangeManagement';
import Profile from '@/containers/Account/Profile';
// import Page404 from '@/containers/404';

interface IRoute {
  path: string;
  name: string;
  title: string;
  component: () => JSX.Element;
}

export const ROUTE_KEY = {
  HOME: 'home',
  DASHBOARD: 'dashboard',
  EXCHANGE_MANAGEMENT: 'exchange_management',
  ACCOUNT_PROFILE: 'account_profile',
  // PAGE_404: 'p404',
};

export const ROUTE_CONFIG: Record<string, IRoute> = {
  [ROUTE_KEY.HOME]: {
    path: '/home',
    name: 'home',
    title: 'Home - AntColony',
    component: Dashboard,
  },
  [ROUTE_KEY.DASHBOARD]: {
    path: '/dashboard',
    name: 'dashboard',
    title: 'Dashboard - AntColony',
    component: Dashboard,
  },
  [ROUTE_KEY.EXCHANGE_MANAGEMENT]: {
    path: '/exchange',
    name: 'exchange management',
    title: 'Exchange Management - AntColony',
    component: ExchangeManagement,
  },
  [ROUTE_KEY.ACCOUNT_PROFILE]: {
    path: '/account/profile',
    name: 'profile',
    title: 'Profile - AntColony',
    component: Profile,
  },
  // [ROUTE_KEY.PAGE_404]:
  // {
  //   path: '*',
  //   name: '404 - AntColony',
  //   component: Page404
  // },
};

export const routes = Object.values(ROUTE_CONFIG);

export const getRouteByKey = (key: string) => ROUTE_CONFIG[key];
