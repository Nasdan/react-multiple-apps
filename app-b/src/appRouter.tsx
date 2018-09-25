import * as React from 'react';
import { Router } from 'react-router-dom';
import { Routes } from './routes';

interface Props {
  history;
}

export const ModuleB: React.StatelessComponent<Props> = props => (
  <Router history={props.history}>
    <Routes />
  </Router>
);
