import { Container } from 'react-bootstrap';
import Header from '../../components/Header';
import Notification from '../../components/Notification';

interface Props {
  children: JSX.Element;
}

const Default = (props: Props) => {
  return (
    <Container>
      <Header />
      <Notification />
      {props.children}
    </Container>
  );
};

export default Default;
