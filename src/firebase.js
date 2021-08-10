import firebase from 'firebase';
const firebaseConfig = {
	apiKey: "AIzaSyCGtVqsF4N2Gg95rRih5tKJAg2OL9eSLTo",
    authDomain: "twitter-react-clone-af210.firebaseapp.com",
    projectId: "twitter-react-clone-af210",
    storageBucket: "twitter-react-clone-af210.appspot.com",
    messagingSenderId: "792311691905",
    appId: "1:792311691905:web:63189fbae66b506dbfeb80",
    measurementId: "G-2CWKYXGQRC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
