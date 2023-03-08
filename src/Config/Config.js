import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCC1UgC-3izvhwRZ1LKCoa975n7V5KWk0I",
    authDomain: "ecom-a189.firebaseapp.com",
    projectId: "ecom-a189",
    storageBucket: "ecom-a189.appspot.com",
    messagingSenderId: "197026277779",
    appId: "1:197026277779:web:b477d730982727fc3b6066",
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}
