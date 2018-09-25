import { actionIds } from './actionIds';

export interface ExternalState {
  subTitle: string;
}

const defaulState = (): ExternalState => ({
  subTitle: '',
});

export const externalReducer = (state = defaulState(), action) => {
  switch (action.type) {
    case actionIds.UPDATE_SUBTITLE:
      return handleUpdateSubTitle(state, action.payload);
  }
  return state;
};

const handleUpdateSubTitle = (
  state: ExternalState,
  subTitle: string
): ExternalState => ({
  subTitle,
});
