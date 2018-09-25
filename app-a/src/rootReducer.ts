import { combineReducers } from 'redux';
import { pageAReducer, PageAState } from './pages/pageA';

export interface State {
  pageA: PageAState;
}

export const rootReducer = combineReducers<State>({
  pageA: pageAReducer,
});
