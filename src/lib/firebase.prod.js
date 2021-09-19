import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyA2hVbglllgD8RKAKgJFQ0UDNd8GiohkzU",
  authDomain: "netflix-8a4ea.firebaseapp.com",
  projectId: "netflix-8a4ea",
  storageBucket: "netflix-8a4ea.appspot.com",
  messagingSenderId: "323144474392",
  appId: "1:323144474392:web:cad70f8d4c86885669086d",
  measurementId: "G-3XK355E83B"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };