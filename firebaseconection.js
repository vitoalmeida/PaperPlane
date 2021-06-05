import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth'
import '@react-native-firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDvHRboGEEyDNAsp2puNbTx_ea7ucmZOSs",
  authDomain: "paperplane-ad963.firebaseapp.com",
  projectId: "paperplane-ad963",
  storageBucket: "paperplane-ad963.appspot.com",
  messagingSenderId: "196592173854",
  appId: "1:196592173854:web:ba7e3faa1cb315833bbf0f",
  measurementId: "G-H9ZZ4P7JVR"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase;
