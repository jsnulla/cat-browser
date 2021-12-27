import { Container } from 'react-bootstrap';
import Header from '../../components/Header';
import Notification from '../../components/Notification';

interface Props {
  children: JSX.Element;
}

const Default = (props: Props) => {
  return (
    <Container fluid className="p-0">
      <Header />
      <Notification />
      <Container className="py-4">{props.children}</Container>
    </Container>
  );
};

export default Default;
