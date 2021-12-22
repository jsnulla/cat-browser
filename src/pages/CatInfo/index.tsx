import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import API from '../../api';
import CardWithImage from '../../components/CardWithImage';

const CatInfo = () => {
  const { imageId } = useParams();
  const [catData, setCatData] = useState<any>(null);

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
        <CardWithImage srcUrl={catData.url} imageId={catData.id}>
          <React.Fragment>
            <h2>{breedData.name}</h2>
            <p>{breedData.description}</p>
            <strong>Origin:</strong> <i>{breedData.origin}</i>
            <br />
            <strong>Temperament:</strong> <i>{breedData.temperament}</i>
          </React.Fragment>
        </CardWithImage>
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
