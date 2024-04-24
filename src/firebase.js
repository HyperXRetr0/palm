import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDzDrlpShA-b2UMO4bOv-YqfJL7WVJj8tk",
//   authDomain: "langage-recognition.firebaseapp.com",
//   projectId: "langage-recognition",
//   storageBucket: "langage-recognition.appspot.com",
//   messagingSenderId: "741244293387",
//   appId: "1:741244293387:web:c54cb3eb4364d2d23c120e",
// };

const firebaseConfig = {
  apiKey: "AIzaSyB55FGfqtQCHSqHDa36asY1ZMWZvgzQOVg",
  authDomain: "palm-723d9.firebaseapp.com",
  projectId: "palm-723d9",
  storageBucket: "palm-723d9.appspot.com",
  messagingSenderId: "482967519517",
  appId: "1:482967519517:web:f72b0eb47be736222fe1f4",
  measurementId: "G-XYJF5CM0CV",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };

//palm-723d9
