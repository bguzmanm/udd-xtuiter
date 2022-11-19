import React from "react";
import { Container } from "react-bootstrap";
import { Empty } from "./components/Empty";

import { Header } from "./components/Header";
import { SendTuit } from "./components/SendTuit";
import { Tuit } from "./components/Tuit";

function App() {

  const [tuits, setTuits] = React.useState([]);

  return (
    <Container>
      <Header />
      <SendTuit />
      <hr />

      {tuits.length === 0 && <Empty />}

      {
        tuits.map((t) => (<Tuit nick={t.user} message={t.message}></Tuit>))
      }


      {/* 
      <Tuit nick="Elon" message="Que opinan de que compre Microsoft?"></Tuit>
      <Tuit nick="Bill" message="Te amo Elon!! volví a ser el más rico del mundo"></Tuit>
      <Tuit nick="Meta" message="Y pq no me compras a mi?"></Tuit> */}


    </Container>
  );
}

export default App;
