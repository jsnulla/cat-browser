import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header';

class Default extends React.Component {
  constructor(props: React.Component) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header />
        {this.props.children}
      </Container>
    );
  }
}

export default Default;
