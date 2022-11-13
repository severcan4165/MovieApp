// Import the functions you need from the SDKs you need

import { initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, } from "firebase/auth";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.authDomain,
  projectId:process.env.projectId,
  storageBucket:process.env.storageBucket,
  messagingSenderId:process.env.messagingSenderId,
  appId:process.env.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) =>{
    
  try {
    let userCredential=  await  createUserWithEmailAndPassword(auth, email, password);
    navigate("/login")
    console.log(userCredential);
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
  } catch (error) {
    console.log(error);
  }
 
 

       
   
    

}

export const signIn = async (email, password,navigate) =>{
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  
  } catch (error) {
    console.log(error);
  }

} 

export const signOut = async () => {
  try {
    await  signOut(auth);

  } catch (error) {
    console.log(error);
  }
}

export const userObserver =  (setCurrentUser) =>{
  onAuthStateChanged(auth, (user)=>{
 
    if(user){
      const {email, displayName, photoURL} = user;
      setCurrentUser({email, displayName, photoURL})


    }
    else{
      setCurrentUser(false)
      console.log("user signed out")
    }
  })
}

export const logOut = () => {
  signOut(auth);
  
};
