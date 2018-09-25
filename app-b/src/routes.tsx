import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './common/constants/routes';
import { App } from './app';
import { PageB } from './pages/pageB';

console.log(`B routes: ${routes.default}`);

export const Routes = () => (
  <App>
    <Switch>
      <Route path={routes.default} component={PageB} />
    </Switch>
  </App>
);
