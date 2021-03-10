import firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCyPGXE6g3geAWZFI_hAyE0dg2rx2KrfQs",
    authDomain: "firegram-c2c9b.firebaseapp.com",
    projectId: "firegram-c2c9b",
    storageBucket: "firegram-c2c9b.appspot.com",
    messagingSenderId: "697878272414",
    appId: "1:697878272414:web:cb4eed2e8442aa949dde8f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, projectStorage, timestamp }
