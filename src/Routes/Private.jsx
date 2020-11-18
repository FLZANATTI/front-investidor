import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLayout from '../Components/PageLayout';
import asyncComponent from '../Utils/AsyncFunc';
import { Session } from '../Utils/Storage';

const PageLayoutRoute = ({
  component: Component,
  titulo,
  icon,
  desativarGrupoCota,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <PageLayout {...props} titulo={titulo} desativarGrupoCota={desativarGrupoCota} icon={icon}>
        <Component {...props} />
      </PageLayout>
    )}
  />
);

const Dashboard = asyncComponent(() => import(/* webpackChunkName: "dashboard" */ '../Pages/Dashboard'));

const PrivateRoutes = ({ url }) => (
  <Switch>
    <Route exact path={`${url}/dashboard`} component={Dashboard} />
  </Switch>
);

export default PrivateRoutes;
