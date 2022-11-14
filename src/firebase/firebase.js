// Import the functions you need from the SDKs you need

import { initializeApp} from "firebase/app";
import {getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup} from "firebase/auth";
  import {
   
    toastSuccessNotify
  
  } from "../helpers/ToastNotify";
 




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) =>{
    
  try {
    let userCredential=  await  createUserWithEmailAndPassword(auth, email, password);
   
    console.log(userCredential);
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/login")
    toastSuccessNotify("Registered successfully!");
    
  } catch (error) {
    console.log(error);
  }
 

}

export const signIn = async (email, password, navigate, currentUser) =>{
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
    toastSuccessNotify("Logged in successfully!");
    console.log(currentUser)
    
   
    
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



export const signInGoogle = async(navigate) =>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
  
      navigate("/");
      toastSuccessNotify("Logged in successfully!");
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};
