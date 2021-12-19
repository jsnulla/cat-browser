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
    default:
      return state;
  }
};
