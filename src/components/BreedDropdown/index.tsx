import React from 'react';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { appBreedSelected } from '../../state/actions';
import { useSearchParams } from 'react-router-dom';

const BreedDropdown = () => {
  const [_, setSearchParams] = useSearchParams();
  const elementIdentifier = 'breed-select-input';
  const apiRequestOngoing = useSelector(
    (state: App.State) => state.apiRequestOngoing
  );
  const breedOptions = useSelector((state: App.State) => state.breedOptions);
  const currentSelectedBreedId = useSelector(
    (state: App.State) => state.selectedBreedId
  );
  const dispatch = useDispatch();

  // Helper method to generate elements for each dropdown option
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

  // Helper method to determine if the component is still waiting for state updates
  const isFetchingBreeds = () => {
    return apiRequestOngoing && breedOptions.length === 0;
  };

  // Generate default selected / displayed dropdown option
  const renderDefaultOption = () => {
    const defaultOptionText = isFetchingBreeds()
      ? 'Fetching list'
      : 'Select a breed';
    return generateOptionElement('-1', defaultOptionText, true);
  };

  // Helper method to generate each breed as a dropdown option
  const renderOptions = (breeds: API.Breed[]) => {
    return breeds.map((breed: API.Breed) => {
      return generateOptionElement(breed.id, breed.name);
    });
  };

  // Helper method to add classes for the dropdown
  const classList = () => {
    let classList = ['form-select'];

    if (apiRequestOngoing) {
      classList.push('loading');
    }

    return classList.join(' ');
  };

  const handleChange = (e: any) => {
    dispatch(appBreedSelected(e.target.value));
    setSearchParams({ breed: e.target.value });
  };

  return (
    <React.Fragment>
      <div className="p-4 select-container rounded drop-shadow">
        <select
          className={classList()}
          name={elementIdentifier}
          id={elementIdentifier}
          value={currentSelectedBreedId || -1}
          disabled={apiRequestOngoing}
          onChange={handleChange}
        >
          {renderDefaultOption()}
          {renderOptions(breedOptions)}
        </select>
      </div>
    </React.Fragment>
  );
};

export default BreedDropdown;
