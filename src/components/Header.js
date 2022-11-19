import { Col, Row } from "react-bootstrap";

function Header() {
  return (
    <Row className="justify-content-md-center">
      <Col xs lg="6">
        <header>
          <h1>XTuiter - Anonymous</h1>
        </header>
      </Col>
    </Row>
  );
}

export { Header };