import { Card } from "react-bootstrap";

function Tuit(props) {

  return (
    <Card className="bg-dark text-white mb-2">
      <Card.Body className="bg-dark text-white">
        <h5 className="card-title bg-dark text-warning">{props.nick} says:</h5>
        <Card.Text className="bg-dark text-white">{props.message}</Card.Text>
      </Card.Body>
    </Card>
  )

}

export { Tuit };