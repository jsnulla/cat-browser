import { useEffect, useState } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import API from '../../api';

const CatInfo = () => {
  const params = useParams();
  const { imageId } = useParams();
  const [catData, setCatData] = useState<any>(null);
  const [fetchingData, setFetchingData] = useState(false);

  useEffect(() => {
    if (imageId && catData == null) {
      API.getImage({ image_id: imageId }).then((response) => {
        setCatData(response.data);
      });
    }
  });

  const renderCatDataCard = () => {
    if (catData) {
      const breedData = catData.breeds[0];

      return (
        <Card>
          <Card.Body>
            <Image src={catData.url} fluid />
          </Card.Body>
          <Card.Footer>
            <h2>{breedData.name}</h2>
            <p>{breedData.description}</p>
            <strong>Origin:</strong> <i>{breedData.origin}</i>
            <br />
            <strong>Temperament:</strong> <i>{breedData.temperament}</i>
          </Card.Footer>
        </Card>
      );
    }
  };

  return (
    <Row>
      <Col>{renderCatDataCard()}</Col>
    </Row>
  );
};

export default CatInfo;
