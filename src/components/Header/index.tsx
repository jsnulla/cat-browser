import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

class Header extends React.Component {
  render = () => {
    return (
      <Navbar sticky="top">
        <Container>
          <Navbar.Brand href="/">Cat Browser</Navbar.Brand>
        </Container>
      </Navbar>
    );
  };
}

export default Header;
