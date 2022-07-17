import { initializeApp } from 'firebase/app'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAaozyMWwre71utfYfu26_YBFWBN3zuzzM",
    authDomain: "web3pedia-feeds.firebaseapp.com",
    databaseURL: "https://web3pedia-feeds-default-rtdb.firebaseio.com",
    projectId: "web3pedia-feeds",
    storageBucket: "web3pedia-feeds.appspot.com",
    messagingSenderId: "249646021950",
    appId: "1:249646021950:web:e0a0ffe5bd4d9db5ce806f"
  };

const app_3 = initializeApp(firebaseConfig,"[FEEDS]")
const feeddatabase = getDatabase(app_3);  

export {feeddatabase}
