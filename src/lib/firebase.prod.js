import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDRBkoG_z-TYghzcrZGGPFlOeQ3-A0D0U8",
  authDomain: "netflix-base.firebaseapp.com",
  projectId: "netflix-base",
  storageBucket: "netflix-base.appspot.com",
  messagingSenderId: "450591691450",
  appId: "1:450591691450:web:c663868c2c062d34db2883"
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };
