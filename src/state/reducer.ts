import * as actions from './actionTypes';

const initialState: App.State = {
  breedOptions: [],
  selectedBreedId: '',
  apiRequestOngoing: false,
  error: '',
};

export const appReducer = (
  state: App.State = initialState,
  action: App.Action
) => {
  switch (action.type) {
    case actions.API_REQUEST_INITIATED:
    case actions.API_REQUEST_FINISHED:
    case actions.API_ERROR_OCCURED:
    case actions.API_ERROR_CLEARED:
    case actions.API_BREEDS_FETCHED:
    case actions.APP_BREED_SELECTED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
