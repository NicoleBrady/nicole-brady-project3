import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
        apiKey: "AIzaSyA-u6IKIqB9SrRHCq_Bt9pPT9aEiYBtKrI",
        authDomain: "project-3-7ad94.firebaseapp.com",
        projectId: "project-3-7ad94",
        storageBucket: "project-3-7ad94.appspot.com",
        messagingSenderId: "403872520852",
        appId: "1:403872520852:web:dbf8f82bb2abda53793281"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      export default firebase;