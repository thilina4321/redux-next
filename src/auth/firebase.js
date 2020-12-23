import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCpykMZTdpSb3Dui8EbfSGrb3qljSLTGg0",
    authDomain: "food-app-fd6dd.firebaseapp.com",
    projectId: "food-app-fd6dd",
    storageBucket: "food-app-fd6dd.appspot.com",
    messagingSenderId: "829687044451",
    appId: "1:829687044451:web:49417cbc7ad5f634b81b56",
    measurementId: "G-BEEP717W2T"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
export const auth = firebase.auth()

export default db

