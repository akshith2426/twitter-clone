import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyDr97gB6RqdJuQWpUTX_3AbAXR9qF71iQk',
	authDomain: 'twitter-clone-90e43.firebaseapp.com',
	projectId: 'twitter-clone-90e43',
	storageBucket: 'twitter-clone-90e43.appspot.com',
	messagingSenderId: '764793714968',
	appId: '1:764793714968:web:556114a8d10b4a7cb7466d',
	measurementId: 'G-5NJ9VSFELZ'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
