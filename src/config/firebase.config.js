// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDllMMBcX5o0Ushnlt0I7AfVRXFhB753pU",
  authDomain: "red-onion-141f1.firebaseapp.com",
  databaseURL: "https://red-onion-141f1.firebaseio.com",
  projectId: "red-onion-141f1",
  storageBucket: "red-onion-141f1.appspot.com",
  messagingSenderId: "42015703427",
  appId: "1:42015703427:web:e3aade8ae45d76f8e436b6",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
