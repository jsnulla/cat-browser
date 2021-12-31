import './index.scss';
import { useState } from 'react';

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
          <div className="spinner-container__spinner-background m-auto drop-shadow">
            <img
              className="spinner-container__spinner m-auto"
              src="/images/cat-loader-sub1.gif"
              alt="Loading"
            />
          </div>
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
