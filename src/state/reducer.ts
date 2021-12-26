import * as actions from './actionTypes';

interface Action {
  type: string;
  payload: object;
}

interface AppState {
  breedOptions: BreedObject[];
  selectedBreedId: string;
  apiRequestOngoing: boolean;
  error: string;
}

interface BreedObject {
  id: string;
  name: string;
}

const initialState = {
  breedOptions: [],
  selectedBreedId: '',
  apiRequestOngoing: false,
  error: '',
};

export const appReducer = (state: AppState = initialState, action: Action) => {
  switch (action.type) {
    case actions.API_ERROR_OCCURED:
      return { ...state, ...action.payload };
    case actions.API_BREEDS_FETCHED:
      return { ...state, ...action.payload };
    case actions.APP_BREED_SELECTED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
