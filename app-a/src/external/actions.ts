import { actionIds } from './actionIds';

export const updateSubTitle = (subTitle: string) => ({
  type: actionIds.UPDATE_SUBTITLE,
  payload: subTitle,
});
