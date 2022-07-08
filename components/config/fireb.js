import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBqw9OyPNkEurItfLBCoYHMTQEwmnXtgLc",
    authDomain: "web3pedia.firebaseapp.com",
    databaseURL: "https://web3pedia-default-rtdb.firebaseio.com",
    projectId: "web3pedia",
    storageBucket: "web3pedia.appspot.com",
    messagingSenderId: "730926718940",
    appId: "1:730926718940:web:fee2f0c848f453af6cb919",
    measurementId: "G-XW8YS2EVXE"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth()
const database = getDatabase();

export {auth,database}

// https://github.com/sairajchouhan/nextjs-firebase-auth