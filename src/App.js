import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { SendTuit } from "./components/SendTuit";

function App() {
  return (
    <Container>
      <Header />
      <SendTuit />
    </Container>
  );
}

export default App;
