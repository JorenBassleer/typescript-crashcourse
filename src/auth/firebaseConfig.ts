import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDJHy0Hin7gYrhdAHkBeCguVcfHa6HyWiU',
  authDomain: 'avreservationtool.firebaseapp.com',
  projectId: 'avreservationtool',
  storageBucket: 'avreservationtool.appspot.com',
  messagingSenderId: '298008457799',
  appId: '1:298008457799:web:fc0e0dcabd5242dd08f762',
  measurementId: 'G-GRXE682Z19'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();