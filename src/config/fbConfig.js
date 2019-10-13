import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAI8b0hQTyDXp52iGR2CwzeCgGs9j_Z0tk",
  authDomain: "react-firebase-f7230.firebaseapp.com",
  databaseURL: "https://react-firebase-f7230.firebaseio.com",
  projectId: "react-firebase-f7230",
  storageBucket: "react-firebase-f7230.appspot.com",
  messagingSenderId: "90361718993"
};
firebase.initializeApp(config);

firebase.firestore().settings({ })

export default firebase;