import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCym5h7hhWbUuxp566qVSB9LYt7eZ52MmI",
    authDomain: "cjwoodru2-todoapp.firebaseapp.com",
    databaseURL: "https://cjwoodru2-todoapp.firebaseio.com",
    storageBucket: "cjwoodru2-todoapp.appspot.com",
    messagingSenderId: "789545267859"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
