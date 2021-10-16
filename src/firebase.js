import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyB4Mp_pY-4R9_bJJk_oyMA_mPdEUQf5dXg",
    databaseURL: "https://playcrowd-571fb-default-rtdb.asia-southeast1.firebasedatabase.app/",
    authDomain: "playcrowd-571fb.firebaseapp.com",
    projectId: "playcrowd-571fb",
    storageBucket: "playcrowd-571fb.appspot.com",
    messagingSenderId: "712603493825",
    appId: "1:712603493825:web:6e0d5fd68be0c34048fb40",
    measurementId: "G-MTV0D082EY"
});

export const auth = app.auth();
export default app;