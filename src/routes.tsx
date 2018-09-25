import * as React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { routes } from './common/constants/routes';
import { App } from './app';
import { LoginContainer } from './pages/login';

const Test = () => (
  <div>
    <h1>Test component</h1>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link style={{ padding: '1rem' }} to="app-a">
        Page A
      </Link>
      <Link style={{ padding: '1rem' }} to="app-b">
        Page B
      </Link>
    </div>
    <LoginContainer />
  </div>
);

export const Routes = () => (
  <App>
    <Switch>
      <Route exact={true} path={routes.default} component={Test} />
    </Switch>
  </App>
);
