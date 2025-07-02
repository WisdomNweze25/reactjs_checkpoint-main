import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container, Navbar, Card, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">My Bootstrap React App</Navbar.Brand>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <h1 className="text-center mb-4">Welcome to My App</h1>

          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title 1</Card.Title>
                  <Card.Text>This is the content of card one.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title 2</Card.Title>
                  <Card.Text>This is the content of card two.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title 3</Card.Title>
                  <Card.Text>This is the content of card three.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
