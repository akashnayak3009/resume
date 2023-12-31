import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home_topbar = () => {
  return (
    <Container className="mt-4">
      <h1>Welcome to the Home Topbar!</h1>
      <p>
        This is where you can display some details and dummy examples to represent the content of the component.
      </p>
      <Row className="mt-4">
        <Col md={6} className="mb-4">
          <h2>Details:</h2>
          <ul>
            <li>Detail 1: Some information</li>
            <li>Detail 2: Another piece of information</li>
          </ul>
        </Col>
        <Col md={6} className="mb-4">
          <h2>Dummy Examples:</h2>
          <p>Example 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Example 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home_topbar;
