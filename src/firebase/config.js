// import Firebase from "firebase";
// import "firebase/firebase-firestore"
// const firebaseConfig = {
//   apiKey: "AIzaSyBhRZMRABZ0L11D-w8GDmkElC8TFB0Eet0",
//   databaseURL: "https://taar-backend.firebaseio.com/",
//   projectId: "taar-backend",
//   appId: "1:860093786146:android:7a53d64db0c5437fd2427b",
// };

// export default Firebase.initializeApp(firebaseConfig);

// // just before export default statement

// export const firestore = firebase.firestore()




import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBhRZMRABZ0L11D-w8GDmkElC8TFB0Eet0",
  authDomain: "taar-backend.firebaseapp.com",
  databaseURL: "https://taar-backend.firebaseio.com",
  projectId: "taar-backend",
  storageBucket: "taar-backend.appspot.com",
  messagingSenderId: "860093786146",
  appId: "1:860093786146:web:69e70ddb018aad52d2427b"

};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;