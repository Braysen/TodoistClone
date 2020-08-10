import firebase from 'firebase/app';//Verificado
import 'firebase/firestore';//Verificado

const firebaseConfig = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
});

export {firebaseConfig as firebase};