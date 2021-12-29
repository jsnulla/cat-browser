import './index.scss';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import API from '../../api';
import ImageWithLoadingAnimation from '../../components/ImageWithLoadingAnimation';

const CatInfo = () => {
  const { imageId } = useParams();
  const navigate = useNavigate();
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
        <div className="info-container drop-shadow">
          <ImageWithLoadingAnimation
            srcUrl={catData.url}
            altText={breedData.name}
          />
          <div className="info-container__div">
            <h2>{breedData.name}</h2>
            <p>{breedData.description}</p>
            <strong>Origin:</strong> <i>{breedData.origin}</i>
            <br />
            <strong>Temperament:</strong> <i>{breedData.temperament}</i>
          </div>
        </div>
      );
    }
  };

  const handleBackButton = () => {
    const params = { breed: catData.breeds[0].id };
    navigate({ pathname: '/', search: `?${createSearchParams(params)}` });
  };

  return (
    <React.Fragment>
      <Row className="p-2">
        <Col>
          <button className="button__secondary" onClick={handleBackButton}>
            Back to the gallery
          </button>
        </Col>
      </Row>
      <Row className="p-2">
        <Col>{renderCatDataCard()}</Col>
      </Row>
    </React.Fragment>
  );
};

export default CatInfo;
