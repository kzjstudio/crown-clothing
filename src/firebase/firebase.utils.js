import firebase from 'firebase/app'
import 'firebase/firebase-firestore';
import 'firebase/auth';



const Config ={
   
        apiKey: "AIzaSyCl6EKb6Xf1BgFl5wv6KUOcYgQR64MoDts",
        authDomain: "crown-db-1a0d1.firebaseapp.com",
        projectId: "crown-db-1a0d1",
        storageBucket: "crown-db-1a0d1.appspot.com",
        messagingSenderId: "271009905108",
        appId: "1:271009905108:web:3d72af5b05c41c1aecfe41",
        measurementId: "G-N3T7LMHDW1"
      
}

export const creatUserProfileDocument = async (userAuth, additionData) => {
 if( !userAuth) return;

 const userRef = firestore.doc(`users/${userAuth.uid}`);

 const snapShot = await userRef.get();

 if(!snapShot.exists){
         const {displayName, email } = userAuth;
         const createdAt = new Date();

         try {
          await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionData
          })
         } catch (error){
         console.log( 'error creating user ', error.measurementId)
         }
 }

 return userRef;

}
        firebase.initializeApp(Config);




export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;