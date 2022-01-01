import './index.scss';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar className="drop-shadow" sticky="top">
      <Container>
        <Link className="navbar-brand" to="/">
          CatBrowser
          <img src="/images/cat-loader-white.gif" alt="Dancing cat" />
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
