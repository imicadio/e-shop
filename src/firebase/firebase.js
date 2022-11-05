import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: move to .env file
export const firebaseConfig = {
  apiKey: "AIzaSyCF9AMT3Dxd9zYbv54IfL4fvUlouIFArTc",
  authDomain: "react-shop-dd1d1.firebaseapp.com",
  databaseURL: "https://react-shop-dd1d1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-shop-dd1d1",
  storageBucket: "react-shop-dd1d1.appspot.com",
  messagingSenderId: "945937278880",
  appId: "1:945937278880:web:d3bd2356cc915a71a2a6c5",
  measurementId: "G-B0QEPF6H1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;