import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKVpFId4hx3I0aznFmiOPcvsTTwFhZcEM",
  authDomain: "twitter-clone-47147.firebaseapp.com",
  databaseURL: "https://twitter-clone-47147.firebaseio.com",
  projectId: "twitter-clone-47147",
  storageBucket: "twitter-clone-47147.appspot.com",
  messagingSenderId: "40135005215",
  appId: "1:40135005215:web:87109395f97399d2b0312a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
