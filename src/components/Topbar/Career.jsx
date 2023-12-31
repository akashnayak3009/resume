import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Career = () => {
  return (
    <Container className="mt-4">
      <h1>Career Opportunities</h1>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Software Engineer</Card.Title>
              <Card.Text>
                We are looking for a talented software engineer to join our team. 
                If you have a passion for coding and solving complex problems, apply now!
              </Card.Text>
              <Button variant="primary">Apply Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>UX/UI Designer</Card.Title>
              <Card.Text>
                Are you a creative designer with a keen eye for user experience? 
                Join us and contribute to designing stunning and user-friendly interfaces.
              </Card.Text>
              <Button variant="primary">Apply Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Career;
