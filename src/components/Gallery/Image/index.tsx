import { useState } from 'react';
import {
  Button,
  Card,
  Col,
  Image as BootstrapImage,
  Spinner,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Image = (props: any) => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState<boolean>(false);

  const renderSpinner = () => {
    if (!loaded) {
      return <Spinner className="m-4" animation="grow" variant="info" />;
    }
  };

  const handleViewDetails = () => {
    navigate(`/${props.image.id}`);
  };

  const renderButton = () => {
    if (!loaded) {
      return <Button disabled>Loading</Button>;
    }

    return (
      <Button className="form-control" onClick={handleViewDetails}>
        View details
      </Button>
    );
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
        <Card.Footer>{renderButton()}</Card.Footer>
      </Card>
    </Col>
  );
};

export default Image;
