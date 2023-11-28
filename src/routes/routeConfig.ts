import Dashboard from '@/containers/Dashboard';
import ExchangeManagement from '@/containers/ExchangeManagement';
import Profile from '@/containers/Account/Profile';
import Page404 from '@/containers/404';
import Login from '@/containers/Login';
import Register from '@/containers/Register';
import Settings from '@/containers/Account/Settings';
import AIPDashboard from '@/containers/AIP/Dashboard';
import AIPManagement from '@/containers/AIP/Management';
import AIPCreate from '@/containers/AIP/PlanCreate';
import AIPDetail from '@/containers/AIP/PlanDetails';
import CryptoExchanges from '@/containers/Cryptoeconomy/CryptoExchanges';
import CryptoPrices from '@/containers/Cryptoeconomy/CryptoPrices';
import CryptoNews from '@/containers/Cryptoeconomy/MarketNews';
import ExchangeDetails from '@/containers/Cryptoeconomy/ExchangeDetails';
import PriceDetails from '@/containers/Cryptoeconomy/PriceDetails';
import NewsDetail from '@/containers/Cryptoeconomy/NewsDetail';

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
  PAGE_404: 'page_404',
  LOGIN: 'login',
  REGISTER: 'register',
  SETTINGS: 'settings',
  AIP_DASHBOARD: 'aip_dashboard',
  AIP_MANAGEMENT: 'aip_management',
  AIP_CREATE: 'aip_create',
  AIP_DETAILS: 'aip_details',
  CRYPTO_EXCHANGES: 'crypto_exchanges',
  CRYPTO_PRICES: 'crypto_prices',
  CRYPTO_NEWS: 'crypto_news',
  CRYPTO_EXCHANGE_DETAILS: 'crypto_exchange_detail',
  CRYPTO_PRICE_DETAILS: 'crypto_price_detail',
  CRYPTO_NEWS_DETAIL: 'crypto_news_detail',
};

export const PUBLIC_ROUTE_CONFIG: Record<string, IRoute> = {
  [ROUTE_KEY.LOGIN]: {
    path: '/login',
    name: 'login',
    title: 'Login - AntColony',
    component: Login,
  },
  [ROUTE_KEY.REGISTER]: {
    path: '/register',
    name: 'register',
    title: 'Register - AntColony',
    component: Register,
  },
  [ROUTE_KEY.PAGE_404]: {
    path: '/404',
    name: '404',
    title: '404 - AntColony',
    component: Page404,
  },
};

export const ROUTE_CONFIG: Record<string, IRoute> = {
  [ROUTE_KEY.HOME]: {
    path: '/home',
    name: 'Home',
    title: 'Home - AntColony',
    component: Dashboard,
  },
  [ROUTE_KEY.DASHBOARD]: {
    path: '/dashboard',
    name: 'Dashboard',
    title: 'Dashboard - AntColony',
    component: Dashboard,
  },
  [ROUTE_KEY.EXCHANGE_MANAGEMENT]: {
    path: '/exchange',
    name: 'Exchange Management',
    title: 'Exchange Management - AntColony',
    component: ExchangeManagement,
  },
  [ROUTE_KEY.ACCOUNT_PROFILE]: {
    path: '/account/profile',
    name: 'Profile',
    title: 'Profile - AntColony',
    component: Profile,
  },
  [ROUTE_KEY.AIP_DASHBOARD]: {
    path: '/aip/dashboard',
    name: 'Auto Invest Dashboard',
    title: 'Auto Invest Dashboard - AntColony',
    component: AIPDashboard,
  },
  [ROUTE_KEY.AIP_MANAGEMENT]: {
    path: '/aip/management',
    name: 'Plan Management',
    title: 'Plan Management - AntColony',
    component: AIPManagement,
  },
  [ROUTE_KEY.AIP_CREATE]: {
    path: '/aip/create',
    name: 'Plan Create',
    title: 'Create Plan - AntColony',
    component: AIPCreate,
  },
  [ROUTE_KEY.AIP_DETAILS]: {
    path: '/aip/details',
    name: 'Plan Details',
    title: 'Plan Details - AntColony',
    component: AIPDetail,
  },
  [ROUTE_KEY.CRYPTO_EXCHANGES]: {
    path: '/crypto/exchanges',
    name: 'Exchanges',
    title: 'Exchanges - AntColony',
    component: CryptoExchanges,
  },
  [ROUTE_KEY.CRYPTO_PRICES]: {
    path: '/crypto/prices',
    name: 'Prices',
    title: 'Prices - AntColony',
    component: CryptoPrices,
  },
  [ROUTE_KEY.CRYPTO_NEWS]: {
    path: '/crypto/news',
    name: 'Market News',
    title: 'Market News - AntColony',
    component: CryptoNews,
  },
  [ROUTE_KEY.CRYPTO_EXCHANGE_DETAILS]: {
    path: '/crypto/exchange/details',
    name: 'Exchange Details',
    title: 'Exchange Details - AntColony',
    component: ExchangeDetails,
  },
  [ROUTE_KEY.CRYPTO_PRICE_DETAILS]: {
    path: '/crypto/price/details',
    name: 'Price Details',
    title: 'Price Details - AntColony',
    component: PriceDetails,
  },
  [ROUTE_KEY.CRYPTO_NEWS_DETAIL]: {
    path: '/crypto/news/detail',
    name: 'News Detail',
    title: 'News Detail - AntColony',
    component: NewsDetail,
  },
  [ROUTE_KEY.SETTINGS]: {
    path: '/account/settings',
    name: 'Settings',
    title: 'Settings - AntColony',
    component: Settings,
  },
};

export const routes = Object.values(ROUTE_CONFIG);
export const publicRoutes = Object.values(PUBLIC_ROUTE_CONFIG);

export const getRouteByKey = (key: string) => ROUTE_CONFIG[key];
export const getPublicRouteByKey = (key: string) => PUBLIC_ROUTE_CONFIG[key];
