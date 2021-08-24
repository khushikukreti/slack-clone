import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyD3Fc_i8UlHayfsfo86s6rPQHkUXntJMrI",
  authDomain: "slack-clone-3903e.firebaseapp.com",
  projectId: "slack-clone-3903e",
  storageBucket: "slack-clone-3903e.appspot.com",
  messagingSenderId: "332047626979",
  appId: "1:332047626979:web:8c48863e72b5291b184bd6"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };