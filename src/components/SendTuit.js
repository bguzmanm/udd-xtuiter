import { Col, Row, Form, Button } from "react-bootstrap";

function SendTuit() {

  return (
    <Row className="justify-content-md-center">
      <Col xs lg="6">
        <Form>
          <Form.Group className="mb-3" id="formNick">
            <Form.Control type="text" placeholder="tu nick chori"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" id="formMessage">
            <Form.Control as="textarea" rows={3} placeholder="tu tuit anónimo"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" id="formSubmit">
            <Button variant="primary" type="button">tuitear!</Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );

}

export { SendTuit };