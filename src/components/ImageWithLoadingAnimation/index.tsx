import './index.scss';
import React, { useState } from 'react';
import { Fade, Spinner } from 'react-bootstrap';

interface Props {
  srcUrl: string;
  altText?: string;
}

const ImageWithLoadingAnimation = (props: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const renderLoadingIndicator = () => {
    if (!imageLoaded) {
      return (
        <div className="spinner-container">
          <Spinner
            className="spinner-container__spinner"
            animation="grow"
            variant="info"
          />
        </div>
      );
    }
  };

  const imageLoadedHandler = () => {
    setImageLoaded(true);
  };

  return (
    <React.Fragment>
      {renderLoadingIndicator()}
      <Fade in={imageLoaded} timeout={500}>
        <img
          className={imageLoaded ? '' : 'd-none'}
          src={props.srcUrl}
          alt={props.altText}
          onLoad={imageLoadedHandler}
        />
      </Fade>
    </React.Fragment>
  );
};

export default ImageWithLoadingAnimation;
