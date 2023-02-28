//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDdOrzKivqNsi5oWo7SGT9q7p7QpDRi5vg",
    authDomain: "fir-comp1800-71752.firebaseapp.com",
    projectId: "fir-comp1800-71752",
    storageBucket: "fir-comp1800-71752.appspot.com",
    messagingSenderId: "154886252916",
    appId: "1:154886252916:web:538ce15323c1ce7dbfe421"

};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
