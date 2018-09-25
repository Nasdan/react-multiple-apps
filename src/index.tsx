import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { history } from './history';
import { AppRouter } from './appRouter';
import { ModuleA } from 'app-a';
import { ModuleB } from 'app-b';

const render = (Component, id) => {
  ReactDOM.render(
    <AppContainer>
      <Component history={history} />
    </AppContainer>,
    document.getElementById(id)
  );
};

render(AppRouter, 'root');
render(ModuleA, 'app-a');
render(ModuleB, 'app-b');

if (module.hot) {
  module.hot.accept('./appRouter', () => {
    render(AppRouter, 'root');
  });
}

if (module.hot) {
  module.hot.accept('app-a', () => {
    render(ModuleA, 'app-a');
  });
}

if (module.hot) {
  module.hot.accept('app-b', () => {
    render(ModuleB, 'app-b');
  });
}
