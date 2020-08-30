import firebase from 'firebase'
require('@firebase/firestore')
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCt6DFzkKO9b9tAtKwGC7BDsqWOpK-UvlY",
    authDomain: "story-teller-148cb.firebaseapp.com",
    databaseURL: "https://story-teller-148cb.firebaseio.com",
    projectId: "story-teller-148cb",
    storageBucket: "story-teller-148cb.appspot.com",
    messagingSenderId: "143044262883",
    appId: "1:143044262883:web:36ad9e568ece6bae0cbed6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()