// import firebase from "firebase/app"
// import "firebase/auth"

// const firebaseConfig = {
//     apiKey: "AIzaSyDexYcYUpZ_imMutlgsA-aLeDMR7NlxkPU",
//     authDomain: "project-auth-c86e6.firebaseapp.com",
//     projectId: "project-auth-c86e6",
//     storageBucket: "project-auth-c86e6.appspot.com",
//     messagingSenderId: "520561202939",
//     appId: "1:520561202939:web:980fabb0c0fd2f2834025e"
// };

// firebase.initializeApp(firebaseConfig)

// export const auth = firebase.auth()

// const provider = new firebase.auth.GoogleAuthProvider()
// provider.setCustomParameters({ prompt: "select_account"})

// export const signInWithGoogle = () => auth.signInWithPopup(provider)

// export default firebase


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDexYcYUpZ_imMutlgsA-aLeDMR7NlxkPU",
  authDomain: "project-auth-c86e6.firebaseapp.com",
  projectId: "project-auth-c86e6",
  storageBucket: "project-auth-c86e6.appspot.com",
  messagingSenderId: "520561202939",
  appId: "1:520561202939:web:980fabb0c0fd2f2834025e"
};

// Initialize Firebase
initializeApp(firebaseConfig);