import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAaWfhkx1sabaGHRF8La7ARCkrLRRdyJjE",
    authDomain: "cactus-react-coderhouse.firebaseapp.com",
    projectId: "cactus-react-coderhouse",
    storageBucket: "cactus-react-coderhouse.appspot.com",
    messagingSenderId: "421471390824",
    appId: "1:421471390824:web:65144c12ac96983a397fdd"
  };

  //Esta función me da una instancia de la App ya inicializada
  const app = firebase.initializeApp(firebaseConfig);

  //Esta función me da una instancia de Firestore
export const getFirestore = () => {
    return firebase.firestore(app)
}
