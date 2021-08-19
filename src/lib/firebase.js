import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyBBI5ommrl2LnlLiXaHorJ_KMk9YGbeCaY",
    authDomain: "instagram-314cf.firebaseapp.com",
    projectId: "instagram-314cf",
    storageBucket: "instagram-314cf.appspot.com",
    messagingSenderId: "553565025318",
    appId: "1:553565025318:web:fb9a3ad5d5a613ffd2e2e7"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;



export { firebase, FieldValue };