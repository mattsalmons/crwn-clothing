import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyBRFnnmIQepCU4SOTtjj0uQmRgcaHuanUA",
  authDomain: "crwn-db-95ee9.firebaseapp.com",
  projectId: "crwn-db-95ee9",
  storageBucket: "crwn-db-95ee9.appspot.com",
  messagingSenderId: "535071915218",
  appId: "1:535071915218:web:144a27165803074edc810b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  console.log(firestore.doc('users/asdkf'))
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;