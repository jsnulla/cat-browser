import React, { PropsWithChildren } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { appBreedSelected } from '../../state/actions';

interface Props extends PropsWithChildren<any> {
  id: string;
  label: string;
  options: InputOption[];
  defaultOptionText: string;
}

interface InputOption {
  value: string;
  text: string;
}

const InputSelect = (props: Props) => {
  const dispatch = useDispatch();

  const generateOptionElement = (
    option: InputOption,
    disabled: boolean = false
  ) => {
    return (
      <option
        disabled={disabled}
        key={`opt-key-${option.value}`}
        value={option.value}
      >
        {option.text}
      </option>
    );
  };

  const renderOptions = (options: InputOption[]) => {
    return options.map((option: InputOption) => {
      return generateOptionElement(option);
    });
  };

  const handleChange = (e: any) => {
    dispatch(appBreedSelected(e.target.value));
  };

  return (
    <React.Fragment>
      <Form.Label htmlFor={props.id}>{props.label}</Form.Label>
      <FormGroup>
        <select
          className="form-control form-select"
          name={props.id}
          id={props.id}
          defaultValue={-1}
          onChange={handleChange}
        >
          {generateOptionElement(
            {
              value: '-1',
              text: props.defaultOptionText,
            },
            true
          )}
          {renderOptions(props.options)}
        </select>
      </FormGroup>
    </React.Fragment>
  );
};

export default InputSelect;
