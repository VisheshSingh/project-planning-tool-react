import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDLiAguxt6wwBqpFf_9aBtjhMELXEauLxc',
  authDomain: 'udemy-ninja-firebase.firebaseapp.com',
  databaseURL: 'https://udemy-ninja-firebase.firebaseio.com',
  projectId: 'udemy-ninja-firebase',
  storageBucket: 'udemy-ninja-firebase.appspot.com',
  messagingSenderId: '951194917880',
  appId: '1:951194917880:web:4ad2a134f1342e50'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
