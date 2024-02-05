import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col md={6}>
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123 456 7890</p>
          </Col>
          <Col md={6}>
            <h4>Follow Us</h4>
            {/* Add your social media links or icons here */}
            <p>Facebook | Twitter | Instagram</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
