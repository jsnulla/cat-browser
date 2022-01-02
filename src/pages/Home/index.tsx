import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import API from '../../api';
import Gallery from '../../components/Gallery';
import BreedDropdown from '../../components/BreedDropdown';
import { apiBreedsFetched, appBreedSelected } from '../../state/actions';

const Home = () => {
  const [searchParams] = useSearchParams();
  const breedOptions = useSelector((state: App.State) => state.breedOptions);
  const selectedBreedId = useSelector(
    (state: App.State) => state.selectedBreedId
  );
  const dispatch = useDispatch();

  // Use effect to load breeds list
  useEffect(() => {
    // Only execute if breedOptions are not present
    if (breedOptions.length === 0) {
      API.getBreeds().then((apiResponse) => {
        if (apiResponse.data) {
          // Transform response to store only needed data
          const fetchedBreeds = apiResponse.data.map((breed: API.Breed) => {
            return {
              id: breed.id,
              name: breed.name,
              description: breed.description,
            };
          });

          // Update app store with fetched breeds from the API
          dispatch(apiBreedsFetched(fetchedBreeds));
        }
      });
    }
  }, []);

  // Use effect to re-select previously selected breed
  useEffect(() => {
    const previousSelectedBreedId = searchParams.get('breed');
    // Only execute if breedOptions are present / loaded
    if (previousSelectedBreedId && breedOptions.length > 0) {
      dispatch(appBreedSelected(previousSelectedBreedId));
    }
  }, [breedOptions]);

  return (
    <React.Fragment>
      <Row>
        <Col className="mx-auto" lg={5} md={8}>
          <BreedDropdown />
        </Col>
      </Row>
      <Row className="p-4">
        <Col>
          <Gallery selectedBreedId={selectedBreedId} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Home;
