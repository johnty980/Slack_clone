import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAXXpmnOix0z-V8FaepeDE8Lq4gKrS3kiY",
    authDomain: "slack-clone-75f17.firebaseapp.com",
    projectId: "slack-clone-75f17",
    storageBucket: "slack-clone-75f17.appspot.com",
    messagingSenderId: "1079500690080",
    appId: "1:1079500690080:web:928f34d444527ed5ed6fc5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
//Initialize the Authentication from firebase
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;