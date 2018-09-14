import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAdtiBxcFZaoARYcM0-GwXtFa5BDkNJv7s",
    authDomain: "training-a0bb4.firebaseapp.com",
    databaseURL: "https://training-a0bb4.firebaseio.com",
    projectId: "training-a0bb4",
    storageBucket: "training-a0bb4.appspot.com",
    messagingSenderId: "763657503514"
  })
}

export default firebase
