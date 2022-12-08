import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCsNs0j1_UcshEhUemUmSan8EP28xwO5J8",
  authDomain: "project-products-1c10a.firebaseapp.com",
  projectId: "project-products-1c10a",
  storageBucket: "project-products-1c10a.appspot.com",
  messagingSenderId: "518207676925",
  appId: "1:518207676925:web:3a3fe48fe766ddae837994",
  measurementId: "G-JLFSCZM6V2"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);