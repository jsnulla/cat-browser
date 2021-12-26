import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar sticky="top">
      <Container>
        <Link className="navbar-brand" to="/">
          Cat Browser
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
