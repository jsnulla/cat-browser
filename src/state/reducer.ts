import * as actions from './actionTypes';

interface Action {
  type: string;
  payload: object;
}

interface AppState {
  breedOptions: BreedObject[];
  selectedBreed: BreedObject | null;
  error: string;
}

interface BreedObject {
  id: string;
  name: string;
}

const initialState = {
  breedOptions: [],
  selectedBreed: null,
  error: '',
};

export const appReducer = (state: AppState = initialState, action: Action) => {
  switch (action.type) {
    case actions.API_BREEDS_FETCHED:
      return { ...state, ...action.payload };
    case actions.APP_BREED_SELECTED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
