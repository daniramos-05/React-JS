import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCLwkCTHqbiAobWxNNaTPxKXOvhz_vaeaA",
  authDomain: "fir-e-comerce-499be.firebaseapp.com",
  projectId: "fir-e-comerce-499be",
  storageBucket: "fir-e-comerce-499be.firebasestorage.app",
  messagingSenderId: "559664731627",
  appId: "1:559664731627:web:58cba89f4a9943da8ff5ae"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )