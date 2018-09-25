import { actionIds } from './actionIds';

export const updateLoginName = (name: string) => ({
  type: actionIds.UPDATE_LOGIN_NAME,
  payload: name,
});
