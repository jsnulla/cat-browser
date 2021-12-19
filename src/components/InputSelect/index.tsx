import React, { PropsWithChildren } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

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

class InputSelect extends React.Component<Props> {
  generateOptionElement(option: InputOption, disabled: boolean = false) {
    return (
      <option
        disabled={disabled}
        key={`opt-key-${option.value}`}
        value={option.value}
      >
        {option.text}
      </option>
    );
  }

  renderOptions() {
    return this.props.options.map((option) => {
      return this.generateOptionElement(option);
    });
  }

  render() {
    return (
      <React.Fragment>
        <Form.Label htmlFor={this.props.id}>{this.props.label}</Form.Label>
        <InputGroup>
          <select name={this.props.id} id={this.props.id} defaultValue={-1}>
            {this.generateOptionElement(
              {
                value: '-1',
                text: this.props.defaultOptionText,
              },
              true
            )}
            {this.renderOptions()}
          </select>
        </InputGroup>
      </React.Fragment>
    );
  }
}

export default InputSelect;
