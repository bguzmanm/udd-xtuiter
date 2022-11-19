import React from "react";
import { Container } from "react-bootstrap";
import { Empty } from "./components/Empty";

import { Header } from "./components/Header";
import { SendTuit } from "./components/SendTuit";
import { Tuit } from "./components/Tuit";
import { TuitList } from "./components/TuitsList";
import { readData, COLECCION } from "./components/TuitsProvider";

function App() {

  const [tuits, setTuits] = React.useState([]);

  React.useEffect(() => {
    readData(COLECCION)
      .then((data) => {
        setTuits(data);
      });

  });

  return (
    <Container>
      <Header />
      <SendTuit />
      <hr />
      {tuits.length === 0 && <Empty />}
      <TuitList>
        {
          tuits.map((t) => (<Tuit key={t.message} nick={t.user} message={t.message}></Tuit>))
        }

      </TuitList>
    </Container>
  );
}

export default App;
