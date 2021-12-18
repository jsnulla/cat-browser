interface AppState {
  foo: string;
}

const initialState = {
  foo: 'bar',
};

type Action = {
  type: string;
  payload: string;
};

export const appReducer = (state: AppState = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
