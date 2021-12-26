import React, { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import API from '../../api';
import CardWithImage from '../CardWithImage';

interface Props {
  selectedBreedId: string;
}

const Gallery = (props: Props) => {
  const [images, setImages] = useState<API.Image[]>([]);
  const [fetchingData, setFetchingData] = useState<boolean>(false);
  const [lastPageLoaded, setLastPageLoaded] = useState<number>(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  useEffect(() => {
    setImages([]);

    if (props.selectedBreedId) {
      fetchImages().then((images) => setImages(images));
    }
  }, [props.selectedBreedId]);

  const fetchImages = (page: number = 0, limit: number = 4) => {
    setFetchingData(true);
    setHasNextPage(false);

    return API.getImages({
      breed_id: props.selectedBreedId,
      limit: limit,
      page: page,
      order: 'asc',
    })
      .then((fetchResponse) => {
        if (!fetchResponse.error) {
          setHasNextPage((page + 1) * limit < fetchResponse.total_items);

          return fetchResponse.data;
        }

        return [];
      })
      .finally(() => {
        setLastPageLoaded(page);
        setFetchingData(false);
      });
  };

  const renderStatusMessage = () => {
    if (props.selectedBreedId) {
      if (fetchingData) {
        return <p>Got it! Give me a moment!</p>;
      } else if (!fetchingData && images.length === 0) {
        return (
          <p>
            We don't seem to have any images for that breed 😿
            <br />
            Try another?
          </p>
        );
      }
    } else {
      return <p>Select a breed and we'll show you what they look like! 😻</p>;
    }
  };

  const renderImages = () => {
    return images.map((image) => {
      return (
        <Col className="py-2" xs={12} md={3} key={`key-col-img-${image.id}`}>
          <CardWithImage imageId={image.id} srcUrl={image.url}>
            <Link className="btn btn-primary form-control" to={image.id}>
              View details
            </Link>
          </CardWithImage>
        </Col>
      );
    });
  };

  const handleLoadMore = () => {
    fetchImages(lastPageLoaded + 1).then((fetchedImages) =>
      setImages(images.concat(fetchedImages))
    );
  };

  const renderLoadMore = () => {
    if (hasNextPage) {
      return (
        <React.Fragment>
          <hr />
          <Button variant="success" onClick={handleLoadMore}>
            Load more
          </Button>
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      <Row>
        <Col className="text-center">{renderStatusMessage()}</Col>
      </Row>
      <Row className="my-2">{renderImages()}</Row>
      <Row className="my-2">
        <Col className="text-center">{renderLoadMore()}</Col>
      </Row>
    </React.Fragment>
  );
};

export default Gallery;
