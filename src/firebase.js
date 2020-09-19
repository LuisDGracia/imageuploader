import firebase from "firebase/app";
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAXGO9wQsWLSYfqzKUDjlZAaGCBMCv4beg",
  authDomain: "image-upload-tester-70ec7.firebaseapp.com",
  databaseURL: "https://image-upload-tester-70ec7.firebaseio.com",
  projectId: "image-upload-tester-70ec7",
  storageBucket: "image-upload-tester-70ec7.appspot.com",
  messagingSenderId: "183902713528",
  appId: "1:183902713528:web:22298b528faa89bf44a64d",
  measurementId: "G-RP5V1RG1NB",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default }
