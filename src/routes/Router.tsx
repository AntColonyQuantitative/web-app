import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { colorBackgroundBody } from '@/styles/palette';
import { paddingLeft } from '@/styles/directions';
import Layout from '@/containers/Layout';
import MainWrapper from '@/containers/App/MainWrapper';
import LogIn from '@/containers/Login';
import Page404 from '@/containers/404';
import { routes } from './routeConfig';


const wrappedRoutes = () => (
  <div>
    <Layout />
    <ContainerWrap>
      {routes.map((item) => (
                <Route
                  path={item.path}
                  key={item.name}
                  component={item.component}
                />
              ))}
    </ContainerWrap>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
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
