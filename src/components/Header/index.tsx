import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar sticky="top">
      <Container>
        <Navbar.Brand href="/">Cat Browser</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
