import { addDoc, getDocs, collection } from "firebase/firestore";
import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { db } from "../database/firebase";
const nick = React.createRef();
const message = React.createRef();

function SendTuit() {

  const [tuits, setTuits] = React.useState([]);

  React.useEffect(() => {

    readData("tuits");
  }, []);

  const readData = async (coleccion) => {
    try {
      const cole = await getDocs(collection(db, coleccion))
      const arrTuits = cole.docs.map(doc => (doc.data()));
      setTuits(arrTuits);
    } catch (error) {
      console.log("Error leyendo los datos: ", error);
    }
  }

  const saveData = async (coleccion, user, message) => {
    try {
      await addDoc(collection(db, coleccion),
        {
          user: user,
          message: message
        });
      console.log("Guardamos en tuit");
    } catch (error) {
      console.log("Error escribiendo el tuit ", error);
    }
  }

  const addTuit = () => {
    saveData("tuits", nick.current.value, message.current.value)
      .then(() => {
        readData("tuit");
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