import { actionIds } from './actionIds';

export interface PageAState {
  title: string;
}

const defaulState = (): PageAState => ({
  title: '',
});

export const pageAReducer = (state = defaulState(), action) => {
  switch (action.type) {
    case actionIds.UPDATE_PAGE_A_TITLE:
      return handleUpdatePageATitle(state, action.payload);
  }
  return state;
};

const handleUpdatePageATitle = (
  state: PageAState,
  title: string
): PageAState => ({
  title,
});
