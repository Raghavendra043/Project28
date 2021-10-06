import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyChDgnvRtquXR8lUuRw04d4g6J6lfr47NU",
  authDomain: "client-58290.firebaseapp.com",
  projectId: "client-58290",
  storageBucket: "client-58290.appspot.com",
  messagingSenderId: "410484205353",
  appId: "1:410484205353:web:b5aefd418c41d62f547938"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export const auth = app.auth(); 
var storage = firebase.storage();
export default firebase;


export {
    app,db, storage
};
