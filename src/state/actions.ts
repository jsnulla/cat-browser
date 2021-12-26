import * as actionTypes from './actionTypes';

export const apiRequestInitiated = () => ({
  type: actionTypes.API_REQUEST_INITIATED,
  payload: { apiRequestOngoing: true },
});

export const apiRequestFinished = () => ({
  type: actionTypes.API_REQUEST_FINISHED,
  payload: { apiRequestOngoing: false },
});

export const apiErrorOccured = (errorMessage: string) => ({
  type: actionTypes.API_ERROR_OCCURED,
  payload: { error: errorMessage },
});

export const apiBreedsFetched = (breedOptions: any) => ({
  type: actionTypes.API_BREEDS_FETCHED,
  payload: {
    breedOptions: breedOptions,
  },
});

export const appBreedSelected = (selectedBreedId: string) => ({
  type: actionTypes.APP_BREED_SELECTED,
  payload: {
    selectedBreedId: selectedBreedId,
  },
});
