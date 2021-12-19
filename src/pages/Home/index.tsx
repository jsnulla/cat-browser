import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import API from '../../api';
import InputSelect from '../../components/InputSelect';
import { apiBreedsFetched } from '../../state/actions';

const Home = () => {
  const [inputOptions, setInputOptions] = useState<any[]>([]);
  const currentBreedOptions = useSelector((state: any) => state.breedOptions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentBreedOptions.length === 0) {
      API.getBreeds().then((apiResponse) => {
        if (apiResponse.data) {
          const breeds = apiResponse.data.map((breed: any) => {
            return {
              value: breed.id,
              text: breed.name,
              description: breed.description,
            };
          });

          dispatch(apiBreedsFetched(breeds));
          setInputOptions(breeds);
        }
      });
    }
  });

  return (
    <Row>
      <Col md={4}>
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
