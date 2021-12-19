import { useState } from 'react';
import {
  Button,
  Card,
  Col,
  Image as BootstrapImage,
  Spinner,
} from 'react-bootstrap';

const Image = (props: any) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  const renderSpinner = () => {
    if (!loaded) {
      return <Spinner className="m-4" animation="grow" variant="info" />;
    }
  };

  return (
    <Col xs={12} md={3} className="my-2 text-center">
      <Card>
        <Card.Body className="m-0 p-0">
          {renderSpinner()}
          <BootstrapImage
            className={loaded ? '' : 'd-none'}
            src={props.image.url}
            fluid
            onLoad={() => setLoaded(true)}
          />
        </Card.Body>
        <Card.Footer>
          <Button className="form-control" disabled={!loaded}>
            View details
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Image;
