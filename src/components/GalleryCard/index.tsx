import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImageWithLoadingAnimation from '../ImageWithLoadingAnimation';

interface Props {
  srcUrl: string;
  imageId: string;
}

const GalleryCard = (props: Props) => {
  return (
    <Card>
      <Card.Body>
        <ImageWithLoadingAnimation srcUrl={props.srcUrl} />
      </Card.Body>
      <Card.Footer>
        <Link className="btn btn-primary form-control" to={props.imageId}>
          View details
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default GalleryCard;
