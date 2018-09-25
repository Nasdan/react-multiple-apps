import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './common/constants/routes';
import { App } from './app';
import { PageAContainer } from './pages/pageA';

export const Routes = () => (
  <App>
    <Switch>
      <Route path={routes.default} component={PageAContainer} />
    </Switch>
  </App>
);
