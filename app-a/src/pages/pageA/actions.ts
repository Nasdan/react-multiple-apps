import { actionIds } from './actionIds';

export const updateTitle = (title: string) => ({
  type: actionIds.UPDATE_PAGE_A_TITLE,
  payload: title,
});
