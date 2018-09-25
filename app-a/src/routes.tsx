import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from 'app-a/src/common/constants/routes';
import { App } from 'app-a/src/app';
import { PageA } from 'app-a/src/pages/pageA';

console.log(`A routes: ${routes.default}`);

export const Routes = () => (
  <App>
    <Switch>
      <Route path={routes.default} component={PageA} />
    </Switch>
  </App>
);
