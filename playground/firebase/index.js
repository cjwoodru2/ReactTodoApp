import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCym5h7hhWbUuxp566qVSB9LYt7eZ52MmI",
  authDomain: "cjwoodru2-todoapp.firebaseapp.com",
  databaseURL: "https://cjwoodru2-todoapp.firebaseio.com",
  storageBucket: "cjwoodru2-todoapp.appspot.com",
  messagingSenderId: "789545267859"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Chris',
    age: 26
  }
});

var logData = (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
}



var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', logData)



todosRef.push({
  text: 'Walk the dog'
})

todosRef.push({
  text: 'Take out the TRASH!'
})
