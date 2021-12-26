import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { appBreedSelected } from '../../state/actions';

const InputSelect = () => {
  const elementIdentifier = 'breed-select-input';
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
      <Form.Label htmlFor={elementIdentifier}>Select a breed</Form.Label>
      <FormGroup>
        <select
          className="form-control form-select"
          name={elementIdentifier}
          id={elementIdentifier}
          value={currentSelectedBreedId || -1}
          onChange={handleChange}
        >
          {generateOptionElement('-1', 'Select a breed', true)}
          {renderOptions(breedOptions)}
        </select>
      </FormGroup>
    </React.Fragment>
  );
};

export default InputSelect;
