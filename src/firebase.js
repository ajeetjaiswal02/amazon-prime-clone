import firebase from  "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBHOSIZb41PW4grMI1B_cSO8_X7mEq-4B8",
    authDomain: "netflix-clone-4cca9.firebaseapp.com",
    projectId: "netflix-clone-4cca9",
    storageBucket: "netflix-clone-4cca9.appspot.com",
    messagingSenderId: "1077109780252",
    appId: "1:1077109780252:web:0390530b0d66e75351d4d9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth();

export { auth }
export default db;
