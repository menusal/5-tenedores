
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDde9tVR1A1ZCQAzAi1LSy5-mvz2DSXJxo",
    authDomain: "tenedores-321bf.firebaseapp.com",
    databaseURL: "https://tenedores-321bf.firebaseio.com",
    projectId: "tenedores-321bf",
    storageBucket: "tenedores-321bf.appspot.com",
    messagingSenderId: "67848013168",
    appId: "1:67848013168:web:b547591fbaa5f3eb777bb5"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
