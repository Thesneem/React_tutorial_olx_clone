import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBg1DNrR5mWbrkfk5T1M8VnmPeIZkNCRjQ",
    authDomain: "olxclone-410d7.firebaseapp.com",
    projectId: "olxclone-410d7",
    storageBucket: "olxclone-410d7.appspot.com",
    messagingSenderId: "523048727420",
    appId: "1:523048727420:web:e5217f986d977d6c64aaf9",
    measurementId: "G-4DCJQG4M6R"
};

export default firebase.initializeApp(firebaseConfig)