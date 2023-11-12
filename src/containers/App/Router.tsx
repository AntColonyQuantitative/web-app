import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { colorBackgroundBody } from '@/styles/palette';
import { paddingLeft } from '@/styles/directions';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import LogIn from '../Login';
import Dashboard from '../Dashboard';
import ExchangeManagement from '../ExchangeManagement';
import Profile from '../Account/Profile';

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
