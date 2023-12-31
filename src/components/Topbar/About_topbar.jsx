import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import resume_img from '../../assets/resume_img.png'
const About_topbar = () => {
  return (
    <Container className="mt-4">
      <h1>About Us</h1>
      <Row className="mt-4">
        <Col md={6}>
          <p>
            Welcome to our company's about page. We are dedicated to providing high-quality products/services 
            and ensuring a great experience for our customers.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </Col>
        <Col md={6}>
          <Image 
            src={resume_img}
            alt="About Us"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About_topbar;
