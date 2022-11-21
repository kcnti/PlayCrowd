import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "-",
    databaseURL: "https://playcrowd-571fb-default-rtdb.asia-southeast1.firebasedatabase.app/",
    authDomain: "playcrowd-571fb.firebaseapp.com",
    projectId: "playcrowd-571fb",
    storageBucket: "playcrowd-571fb.appspot.com",
    messagingSenderId: "-",
    appId: "-",
    measurementId: "-"
});

export const auth = app.auth();
export default app;
