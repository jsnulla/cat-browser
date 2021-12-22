import { Container } from 'react-bootstrap';
import Header from '../../components/Header';

interface Props {
  children: JSX.Element;
}

const Default = (props: Props) => {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
};

export default Default;
