import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import API from '../../api';
import Gallery from '../../components/Gallery';
import InputSelect from '../../components/InputSelect';
import { apiBreedsFetched } from '../../state/actions';

const Home = () => {
  const breedOptions = useSelector((state: App.State) => state.breedOptions);
  const selectedBreedId = useSelector(
    (state: App.State) => state.selectedBreedId
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (breedOptions.length === 0) {
      API.getBreeds().then((apiResponse) => {
        if (apiResponse.data) {
          const fetchedBreeds = apiResponse.data.map((breed: any) => {
            return {
              id: breed.id,
              name: breed.name,
              description: breed.description,
            };
          });

          dispatch(apiBreedsFetched(fetchedBreeds));
        }
      });
    }
  }, []);

  return (
    <React.Fragment>
      <Row>
        <Col md={4}>
          <InputSelect />
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
