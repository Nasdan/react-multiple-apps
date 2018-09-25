import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Routes } from './routes';
import { store } from './store';

interface Props {
  history;
}

export const ModuleA: React.StatelessComponent<Props> = props => (
  <Provider store={store}>
    <ConnectedRouter history={props.history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);
