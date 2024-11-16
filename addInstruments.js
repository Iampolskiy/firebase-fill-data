import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase.config.js";

const instruments = [
  { name: "Klavier", category: "Tasteninstrument", id: "001", price: 5000 },
  { name: "Gitarre", category: "Saiteninstrument", id: "002", price: 1500 },
  { name: "Schlagzeug", category: "Schlaginstrument", id: "003", price: 3000 },
  { name: "Violine", category: "Saiteninstrument", id: "004", price: 2500 },
  { name: "Trompete", category: "Blasinstrument", id: "005", price: 1200 },
  { name: "Flöte", category: "Blasinstrument", id: "006", price: 800 },
  { name: "Cello", category: "Saiteninstrument", id: "007", price: 4000 },
  { name: "Keyboard", category: "Tasteninstrument", id: "008", price: 2000 },
  { name: "Saxophon", category: "Blasinstrument", id: "009", price: 2500 },
  { name: "Ukulele", category: "Saiteninstrument", id: "010", price: 500 },
  { name: "Kontrabass", category: "Saiteninstrument", id: "011", price: 6000 },
  { name: "Oboe", category: "Blasinstrument", id: "012", price: 1800 },
  { name: "Pauke", category: "Schlaginstrument", id: "013", price: 3500 },
  { name: "Xylophon", category: "Schlaginstrument", id: "014", price: 900 },
  { name: "Tuba", category: "Blasinstrument", id: "015", price: 3000 },
  { name: "E-Gitarre", category: "Saiteninstrument", id: "016", price: 2500 },
  { name: "Bassgitarre", category: "Saiteninstrument", id: "017", price: 2000 },
  { name: "Harfe", category: "Saiteninstrument", id: "018", price: 7000 },
  { name: "Akkordeon", category: "Tasteninstrument", id: "019", price: 2200 },
  { name: "Klarinette", category: "Blasinstrument", id: "020", price: 1500 },
];

const addInstrumentsToFirestore = async () => {
  const collectionRef = collection(db, "Instruments");

  try {
    for (const instrument of instruments) {
      await addDoc(collectionRef, instrument);
      console.log(`Instrument ${instrument.name} hinzugefügt.`);
    }
    console.log("alle Musikinstrumente wurden erfolgreich hinzugefügt.");
  } catch (error) {
    console.log("Fefler beim Hinzufügen der Musikinstrumente: ", error);
  }
};

addInstrumentsToFirestore();
