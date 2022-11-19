import { Row, Col } from "react-bootstrap"

function Empty() {

  return (
    <Row className="mx-auto">
      <Col className="justify-content-md-center text-center">
        <h3>Aún no tienes xtuits en tu timeline</h3>
        <img src="/img/empty.png" className="img-fluid" alt="Aún no tienes xtuits en tu timeline" />
      </Col>
    </Row>

  )

}

export { Empty }