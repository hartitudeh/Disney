import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6UYZX4fugQHOoWsBCik8tNBcKAozQeC8",
  authDomain: "disney-clone-app-2da0b.firebaseapp.com",
  projectId: "disney-clone-app-2da0b",
  storageBucket: "disney-clone-app-2da0b.appspot.com",
  messagingSenderId: "320447220160",
  appId: "1:320447220160:web:a3bb294e92f8901c5a2025",
  measurementId: "G-C2PEF3QGYF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
