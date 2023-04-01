import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBu6j_zAVNqi13YOgYUdS35XV1v33ekJdI",
  authDomain: "vue-firestroe-store.firebaseapp.com",
  projectId: "vue-firestroe-store",
  storageBucket: "vue-firestroe-store.appspot.com",
  messagingSenderId: "563503894012",
  appId: "1:563503894012:web:6d713da799b21fa2753679",
};
//init firebase
firebase.initializeApp(firebaseConfig);
//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectFirestore, projectAuth, projectStorage, timestamp };
