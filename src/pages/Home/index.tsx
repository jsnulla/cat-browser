import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import API from '../../api';
import Gallery from '../../components/Gallery';
import InputSelect from '../../components/InputSelect';
import { apiBreedsFetched } from '../../state/actions';

const Home = () => {
  const [inputOptions, setInputOptions] = useState<any[]>([]);
  const selectedBreedId = useSelector((state: any) => state.selectedBreedId);
  const dispatch = useDispatch();

  useEffect(() => {
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
  }, []);

  return (
    <React.Fragment>
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
      <Row className="mt-2">
        <Col>
          <hr />
          <Gallery selectedBreedId={selectedBreedId} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Home;
