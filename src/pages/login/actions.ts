import { actionIds } from './actionIds';
import { store, actions } from 'app-a';

export const updateLoginName = (name: string) => {
  store.dispatch(actions.updateSubTitle(name));

  return {
    type: actionIds.UPDATE_LOGIN_NAME,
    payload: name,
  };
};
