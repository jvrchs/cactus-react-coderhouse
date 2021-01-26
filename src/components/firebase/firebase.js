import firebase from "firebase/app";
import "firebase/firestore";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAaWfhkx1sabaGHRF8La7ARCkrLRRdyJjE",
    authDomain: "cactus-react-coderhouse.firebaseapp.com",
    databaseURL: "https://cactus-react-coderhouse-default-rtdb.firebaseio.com",
    projectId: "cactus-react-coderhouse",
    storageBucket: "cactus-react-coderhouse.appspot.com",
    messagingSenderId: "421471390824",
    appId: "1:421471390824:web:65144c12ac96983a397fdd"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

//Esta función me da una instancia de Firestore
export const getFirestore = () => {
    return firebase.firestore(app)
}