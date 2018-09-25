import { combineReducers } from 'redux';
import { loginReducer, LoginState } from './pages/login';

export interface State {
  login: LoginState;
}

export const rootReducer = combineReducers<State>({
  login: loginReducer,
});
