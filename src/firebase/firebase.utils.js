import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyATXGIAqsJVxqSIRnUaVuQD-uTXTgFv43E",
        authDomain: "crwn-db-383fa.firebaseapp.com",
        databaseURL: "https://crwn-db-383fa.firebaseio.com",
        projectId: "crwn-db-383fa",
        storageBucket: "crwn-db-383fa.appspot.com",
        messagingSenderId: "1037537770361",
        appId: "1:1037537770361:web:da4715e2d05754ee10cda8",
        measurementId: "G-NFRMDZRPMY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if (!snapShot.exists) {
                const { displayName, email} = userAuth;
                const createdAt = new Date();

                try{
                        await userRef.set({
                             displayName,
                             email,
                             createdAt,
                             ...additionalData   
                        })
                }catch(error){
                console.log('error creating user', error.message);
                }
        }

        return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;