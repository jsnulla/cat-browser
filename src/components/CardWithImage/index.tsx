import { Card } from 'react-bootstrap';
import ImageWithLoadingAnimation from '../ImageWithLoadingAnimation';

interface Props {
  srcUrl: string;
  imageId: string;
  children: JSX.Element;
}

const CardWithImage = (props: Props) => {
  return (
    <Card>
      <Card.Body className="m-0 p-0">
        <ImageWithLoadingAnimation srcUrl={props.srcUrl} />
      </Card.Body>
      <Card.Footer>{props.children}</Card.Footer>
    </Card>
  );
};

export default CardWithImage;
