import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ModuleA } from './appRouter';
import { history } from './history';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component history={history} />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(ModuleA);

if (module.hot) {
  module.hot.accept('./appRouter', () => {
    render(ModuleA);
  });
}
