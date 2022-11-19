import { getDocs, addDoc, collection } from "firebase/firestore";
import { db } from "../database/firebase";

const COLECCION = "tuits";

const readData = async (coleccion) => {
  try {
    const cole = await getDocs(collection(db, coleccion));
    let arrTuits = cole.docs.map(doc => (doc.data()));
    arrTuits = arrTuits.sort((a, b) => a.ts - b.ts);
    return arrTuits;
  } catch (error) {
    console.log("Error leyendo los datos: ", error);
  }
}

const saveData = async (coleccion, user, message) => {
  try {
    await addDoc(collection(db, coleccion),
      {
        user: user,
        message: message,
        ts: Date.now(),
      });
  } catch (error) {
    console.log("Error escribiendo el tuit ", error);
  }
}



export { readData, saveData, COLECCION }