import * as actions from './actionTypes';

interface Action {
  type: string;
  payload: object;
}

interface AppState {
  breedOptions: API.Breed[];
  selectedBreedId: string;
  apiRequestOngoing: boolean;
  error: string;
}

const initialState = {
  breedOptions: [],
  selectedBreedId: '',
  apiRequestOngoing: false,
  error: '',
};

export const appReducer = (state: AppState = initialState, action: Action) => {
  switch (action.type) {
    case actions.API_REQUEST_INITIATED:
    case actions.API_REQUEST_FINISHED:
    case actions.API_ERROR_OCCURED:
    case actions.API_BREEDS_FETCHED:
    case actions.APP_BREED_SELECTED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
