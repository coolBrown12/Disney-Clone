import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyAk3BM7W3DZWAeUtmBaDyX1mRys3jazdbI",
    authDomain: "disney-clone-679e3.firebaseapp.com",
    projectId: "disney-clone-679e3",
    storageBucket: "disney-clone-679e3.appspot.com",
    messagingSenderId: "268091606593",
    appId: "1:268091606593:web:e17f2b68181795e2f628c0",
    measurementId: "G-R1CZ9XNYCB"
  };


const firebaseApp=firebase.intializeApp(firebaseConfig);
const db=firebaseApp.firstore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();


export {auth, provider,storage};
export default db;