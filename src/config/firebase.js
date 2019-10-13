import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyD71nFj5YGLjdAMGf9A5PeawK_u-7ovs9s",
    authDomain: "reactflix-6036e.firebaseapp.com",
    databaseURL: "https://reactflix-6036e.firebaseio.com",
    storageBucket: "reactflix-6036e.appspot.com",
};

firebase.initializeApp(config);

export const db = firebase.database();