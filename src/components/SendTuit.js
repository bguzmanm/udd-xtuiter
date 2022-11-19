import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { COLECCION, saveData, readData } from './TuitsProvider';
const nick = React.createRef();
const message = React.createRef();

function SendTuit() {

  const [setTuits] = React.useState([]);

  const addTuit = async () => {
    await saveData(COLECCION, nick.current.value, message.current.value)
      .then(() => {
        readData(COLECCION)
          .then((data) => {
            setTuits(data);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <Row className="justify-content-md-center">
      <Col xs lg="6">
        <Form>
          <Form.Group className="mb-3" id="formNick">
            <Form.Control ref={nick} type="text" placeholder="tu nick chori"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" id="formMessage">
            <Form.Control ref={message} as="textarea" rows={3} placeholder="tu xtuit anónimo"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" id="formSubmit">
            <Button onClick={() => addTuit()} variant="primary" type="button">tuitear!</Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );

}

export { SendTuit };