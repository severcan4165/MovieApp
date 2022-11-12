// Import the functions you need from the SDKs you need
import axios from "axios";
import { initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket:process.env.storageBucket,
  messagingSenderId:process.env.messagingSenderId,
  appId:process.env.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password) =>{
    
  let userCredential=  await  createUserWithEmailAndPassword(auth, email, password);
  console.log(userCredential);

       
   
    

}