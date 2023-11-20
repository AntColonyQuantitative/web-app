import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { colorBackgroundBody } from '@/styles/palette';
import { paddingLeft } from '@/styles/directions';
import Layout from '@/containers/Layout';
import MainWrapper from '@/containers/App/MainWrapper';
import LogIn from '@/containers/Login';
import Dashboard from '@/containers/Dashboard';
import ExchangeManagement from '@/containers/ExchangeManagement';
import Profile from '@/containers/Account/Profile';
import Page404 from '@/containers/404';

const Pages = () => (
  <Switch>
    <Route path="/pages/dashboard" component={Dashboard} />
    <Route path="/pages/exchange" component={ExchangeManagement} />
  </Switch>
);

const Account = () => (
  <Switch>
    <Route path="/account/profile" component={Profile} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <ContainerWrap>
      <Route path="/pages" component={Pages} />
      <Route path="/account" component={Account} />
    </ContainerWrap>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/login" component={LogIn} />
        <Route path="/404" component={Page404} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;

// region STYLES

const ContainerWrap = styled.div`
  padding-top: 90px;
  min-height: 100vh;
  transition: padding-left 0.3s;

  ${paddingLeft}: 0;

  background: ${colorBackgroundBody};

  @media screen and (min-width: 576px) {
    ${paddingLeft}: 250px;
  }

  @media screen and (max-width: 576px) {
    padding-top: 150px;
  }
`;

// endregion