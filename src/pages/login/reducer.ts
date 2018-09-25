import { actionIds } from './actionIds';

export interface LoginState {
  name: string;
}

const defaulState = (): LoginState => ({
  name: '',
});

export const loginReducer = (state = defaulState(), action) => {
  switch (action.type) {
    case actionIds.UPDATE_LOGIN_NAME:
      return handleUpdateLoginName(state, action.payload);
  }
  return state;
};

const handleUpdateLoginName = (
  state: LoginState,
  name: string
): LoginState => ({
  name,
});
