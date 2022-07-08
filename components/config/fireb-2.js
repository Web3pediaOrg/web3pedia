import { initializeApp } from 'firebase/app'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBNrN-dhLV83bdF2tCplvp_2aeZ7kbGfbs",
  authDomain: "web3pedia-users.firebaseapp.com",
  databaseURL: "https://web3pedia-users-default-rtdb.firebaseio.com",
  projectId: "web3pedia-users",
  storageBucket: "web3pedia-users.appspot.com",
  messagingSenderId: "425895513748",
  appId: "1:425895513748:web:4c8224853202ebbc0eae81"
};


const app_2 = initializeApp(firebaseConfig,"[DATA]")
const userdatabase = getDatabase(app_2);

export {userdatabase}

// https://github.com/sairajchouhan/nextjs-firebase-auth