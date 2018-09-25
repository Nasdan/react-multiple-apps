import * as React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { routes } from './common/constants/routes';
import { App } from './app';

const Test = () => (
  <div>
    <h1>Test component</h1>
    <Link to="app-a">Page A</Link>
    <Link to="app-b">Page B</Link>
  </div>
);

export const Routes = () => (
  <App>
    <Switch>
      <Route exact={true} path={routes.default} component={Test} />
    </Switch>
  </App>
);
