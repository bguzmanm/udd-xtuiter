import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { Container } from "react-bootstrap";
import { Empty } from "./components/Empty";

import { Header } from "./components/Header";
import { SendTuit } from "./components/SendTuit";
import { Tuit } from "./components/Tuit";
import { db } from "./database/firebase";

function App() {

  const [tuits, setTuits] = React.useState([]);

  React.useEffect(() => {
    const readData = async (coleccion) => {
      try {
        const cole = await getDocs(collection(db, coleccion))
        const arrTuits = cole.docs.map(doc => (doc.data()));
        setTuits(arrTuits);
      } catch (error) {
        console.log("Error leyendo los datos: ", error);
      }
    }
    readData("tuits");
  }, []);

  return (
    <Container>
      <Header />
      <SendTuit />
      <hr />

      {tuits.length === 0 && <Empty />}

      {
        tuits.map((t) => (<Tuit key={t.message} nick={t.user} message={t.message}></Tuit>))
      }


      {/* 
      <Tuit nick="Elon" message="Que opinan de que compre Microsoft?"></Tuit>
      <Tuit nick="Bill" message="Te amo Elon!! volví a ser el más rico del mundo"></Tuit>
      <Tuit nick="Meta" message="Y pq no me compras a mi?"></Tuit> */}


    </Container>
  );
}

export default App;
