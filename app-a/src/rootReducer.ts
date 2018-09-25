import { combineReducers } from 'redux';
import { pageAReducer, PageAState } from './pages/pageA';
import { externalReducer, ExternalState } from './external';

export interface State {
  pageA: PageAState;
  external: ExternalState;
}

export const rootReducer = combineReducers<State>({
  pageA: pageAReducer,
  external: externalReducer,
});
