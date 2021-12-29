import './index.scss';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';

interface Props {
  srcUrl: string;
  altText?: string;
  rounded?: boolean;
  dropShadow?: boolean;
}

const ImageWithLoadingAnimation = (props: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const renderLoadingIndicator = () => {
    if (!imageLoaded) {
      return (
        <div className="spinner-container">
          <Spinner
            className="spinner-container__spinner m-auto"
            animation="grow"
            variant="info"
          />
        </div>
      );
    }
  };

  const imageClassList = () => {
    let classList = [];

    if (props.rounded) {
      classList.push('rounded');
    }

    if (props.dropShadow) {
      classList.push('drop-shadow');
    }

    return classList.join(' ');
  };

  const imageLoadedHandler = () => {
    setImageLoaded(true);
  };

  return (
    <div className="img-container">
      {renderLoadingIndicator()}
      <img
        className={imageClassList()}
        src={props.srcUrl}
        alt={props.altText}
        onLoad={imageLoadedHandler}
      />
    </div>
  );
};

export default ImageWithLoadingAnimation;
