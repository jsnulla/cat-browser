import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import API from '../../api';
import Image from './Image';

const Gallery = (props: any) => {
  const [images, setImages] = useState<any[]>([]);
  const [fetchingData, setFetchingData] = useState<boolean>(false);

  useEffect(() => {
    setImages([]);

    if (props.selectedBreedId) {
      setFetchingData(true);

      API.getImages({
        breed_id: props.selectedBreedId,
        limit: 8,
        page: 0,
        order: 'asc',
      }).then((res) => {
        setImages(res.data);
        setFetchingData(false);
      });
    }
  }, [props.selectedBreedId]);

  const renderStatusMessage = () => {
    if (props.selectedBreedId) {
      if (fetchingData) {
        return <p>Got it! Give me a moment!</p>;
      }
    } else {
      return <p>Select a breed and we'll show you what they look like! 😻</p>;
    }
  };

  const renderImages = () => {
    return images.map((image, index) => {
      return <Image key={`image-key=${image.id}`} image={image} />;
    });
  };

  return (
    <React.Fragment>
      <Row>
        <Col className="text-center">{renderStatusMessage()}</Col>
      </Row>
      <Row className="my-2">{renderImages()}</Row>
    </React.Fragment>
  );
};

export default Gallery;
