import { Container } from 'react-bootstrap';
import Header from '../../components/Header';

const Default = (props: any) => {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
};

export default Default;
