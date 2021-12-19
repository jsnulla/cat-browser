import * as actionTypes from './actionTypes';

export const apiBreedsFetched = (breedOptions: any) => ({
  type: actionTypes.API_BREEDS_FETCHED,
  payload: {
    breedOptions: breedOptions,
  },
});

export const appBreedSelected = (selectedBreed: any) => ({
  type: actionTypes.APP_BREED_SELECTED,
  payload: {
    selectedBreed: selectedBreed,
  },
});
