import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAu8aHNAGYfMsJj3k5oLkD-_X277Ss80rM",
    authDomain: "clone-dd7cd.firebaseapp.com",
    databaseURL: "https://clone-dd7cd.firebaseio.com",
    projectId: "clone-dd7cd",
    storageBucket: "clone-dd7cd.appspot.com",
    messagingSenderId: "512535376144",
    appId: "1:512535376144:web:b157c791aff7668d98f595",
    measurementId: "G-F191ZLJ21W"
});


const auth = firebase.auth();

export { auth };