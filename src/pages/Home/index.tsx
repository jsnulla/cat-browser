import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import InputSelect from '../../components/InputSelect';

const Home = () => {
  const [inputOptions, setInputOptions] = useState<any[]>([]);

  return (
    <Row>
      <Col>
        <InputSelect
          id="select-breed-dropdown"
          label="Breeds"
          options={inputOptions}
          defaultOptionText="Select a breed"
        />
      </Col>
    </Row>
  );
};

export default Home;
