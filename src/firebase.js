

// import  firebase from 'firebase/app';
// import "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA0Mn06dehFZP1rZd3IZcu5fs3TGOMfrKY",
    authDomain: "reactfirebaseauth-23e53.firebaseapp.com",
    projectId: "reactfirebaseauth-23e53",
    storageBucket: "reactfirebaseauth-23e53.appspot.com",
    messagingSenderId: "1079100833608",
    appId: "1:1079100833608:web:cc895f73bd1233686f3d7d"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export{auth,googleAuthProvider,facebookAuthProvider};
