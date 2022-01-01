import './index.scss';
import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner, Fade } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import API from '../../api';
import ImageWithLoadingAnimation from '../ImageWithLoadingAnimation';

interface Props {
  selectedBreedId: string;
}

const Gallery = (props: Props) => {
  const apiRequestOngoing = useSelector(
    (state: App.State) => state.apiRequestOngoing
  );
  const [images, setImages] = useState<API.Image[]>([]);
  const [lastPageLoaded, setLastPageLoaded] = useState<number>(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  useEffect(() => {
    if (props.selectedBreedId) {
      fetchImages().then((images) => setImages(images));
    }

    // clean up
    return () => {
      setImages([]);
      setLastPageLoaded(0);
      setHasNextPage(false);
    };
  }, [props.selectedBreedId]);

  const fetchImages = (page: number = 0, limit: number = 8) => {
    return API.getImages({
      breed_id: props.selectedBreedId,
      limit: limit,
      page: page,
      order: 'asc',
    }).then((fetchResponse) => {
      if (!fetchResponse.error) {
        setHasNextPage((page + 1) * limit < fetchResponse.total_items);
        setLastPageLoaded(page);

        return fetchResponse.data;
      }

      return [];
    });
  };

  const renderStatusMessage = () => {
    if (props.selectedBreedId) {
      if (apiRequestOngoing) {
        return (
          <div className="gallery-status-div__spinner">
            <Spinner className="m-auto" animation="border" variant="light" />
          </div>
        );
      }

      if (!apiRequestOngoing && images.length === 0) {
        return (
          <div className="gallery-status-div__text">
            <h3 className="rounded drop-shadow m-auto">
              We don't seem to have any images for that breed 😿
            </h3>
          </div>
        );
      }
    }
  };

  const renderImages = () => {
    return images.map((image) => {
      return (
        <li
          className="gallery-container__list-item rounded"
          key={`list-key-${image.id}`}
        >
          <Link to={image.id}>
            <ImageWithLoadingAnimation
              srcUrl={image.url}
              altText={image.breeds[0].name}
              rounded={true}
              dropShadow={true}
            />
          </Link>
        </li>
      );
    });
  };

  const handleLoadMoreClick = () => {
    fetchImages(lastPageLoaded + 1).then((fetchedImages) =>
      setImages(images.concat(fetchedImages))
    );
  };

  const renderLoadMoreButton = () => {
    const buttonText = apiRequestOngoing ? (
      <span>
        Loading&nbsp;
        <Spinner animation="border" size="sm" />
      </span>
    ) : (
      'Load more'
    );
    if (hasNextPage) {
      return (
        <Fade in={true}>
          <button
            className="button__secondary"
            onClick={handleLoadMoreClick}
            disabled={apiRequestOngoing}
          >
            {buttonText}
          </button>
        </Fade>
      );
    }
  };

  return (
    <React.Fragment>
      <Row>
        <Col className="text-center offset-md-3" md="6" sm="12">
          <div className="gallery-status-div">{renderStatusMessage()}</div>
        </Col>
      </Row>
      <Row className="my-2">
        <Col className="gallery-container">
          <ul className="gallery-container__list">{renderImages()}</ul>
        </Col>
      </Row>
      <Row className="my-2">
        <Col className="text-center load-more-container">
          {renderLoadMoreButton()}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Gallery;
