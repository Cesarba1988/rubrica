import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBn9nRO23-Ka8_EZSy_mZrV5178hyu_hSA",
  authDomain: "logincrud-51315.firebaseapp.com",
  projectId: "logincrud-51315",
  storageBucket: "logincrud-51315.appspot.com",
  messagingSenderId: "844353975395",
  appId: "1:844353975395:web:b4498edd4103553eb27456"
};

  
  // Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = app.auth()

export {db,auth}