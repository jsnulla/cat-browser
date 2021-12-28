import React from 'react';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { appBreedSelected } from '../../state/actions';

const InputSelect = () => {
  const elementIdentifier = 'breed-select-input';
  const apiRequestOngoing = useSelector(
    (state: App.State) => state.apiRequestOngoing
  );
  const breedOptions = useSelector((state: App.State) => state.breedOptions);
  const currentSelectedBreedId = useSelector(
    (state: App.State) => state.selectedBreedId
  );
  const dispatch = useDispatch();

  const generateOptionElement = (
    value: string,
    text: string,
    disabled: boolean = false
  ) => {
    return (
      <option disabled={disabled} key={`opt-key-${value}`} value={value}>
        {text}
      </option>
    );
  };

  const isFetchingBreeds = () => {
    return apiRequestOngoing && breedOptions.length === 0;
  };

  const renderDefaultOption = () => {
    const defaultOptionText = isFetchingBreeds()
      ? 'Fetching list'
      : 'Select a breed';
    return generateOptionElement('-1', defaultOptionText, true);
  };

  const renderOptions = (breeds: API.Breed[]) => {
    return breeds.map((breed: API.Breed) => {
      return generateOptionElement(breed.id, breed.name);
    });
  };

  const handleChange = (e: any) => {
    dispatch(appBreedSelected(e.target.value));
  };

  return (
    <React.Fragment>
      <div className="p-4 select-container rounded drop-shadow">
        <select
          className="form-control form-select"
          name={elementIdentifier}
          id={elementIdentifier}
          value={currentSelectedBreedId || -1}
          disabled={isFetchingBreeds()}
          onChange={handleChange}
        >
          {renderDefaultOption()}
          {renderOptions(breedOptions)}
        </select>
      </div>
    </React.Fragment>
  );
};

export default InputSelect;
