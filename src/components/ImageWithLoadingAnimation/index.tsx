import React, { useState } from 'react';
import { Fade, Image, Spinner } from 'react-bootstrap';

interface Props {
  srcUrl: string;
}

const ImageWithLoadingAnimation = (props: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const renderLoadingIndicator = () => {
    if (!imageLoaded) {
      return <Spinner className="m-4" animation="grow" variant="info" />;
    }
  };

  const imageLoadedHandler = () => {
    setImageLoaded(true);
  };

  return (
    <React.Fragment>
      <div className="text-center">
        {renderLoadingIndicator()}
        <Fade in={imageLoaded} timeout={500}>
          <Image
            className={imageLoaded ? '' : 'd-none'}
            src={props.srcUrl}
            fluid
            onLoad={imageLoadedHandler}
          />
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default ImageWithLoadingAnimation;
