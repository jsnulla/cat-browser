interface AppState {
  foo: string;
}

const initialState = {
  foo: 'bar',
};

interface Action {
  type: string;
  payload: object;
}

export const appReducer = (state: AppState = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
