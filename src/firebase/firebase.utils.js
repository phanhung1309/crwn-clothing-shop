import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBMeCIJ3BfDgsNeaiTY6v5IrxvszTSN8J4',
  authDomain: 'crwn-clothing-db-b57da.firebaseapp.com',
  projectId: 'crwn-clothing-db-b57da',
  storageBucket: 'crwn-clothing-db-b57da.appspot.com',
  messagingSenderId: '537552034648',
  appId: '1:537552034648:web:c305996ca150728cbfa32d',
  measurementId: 'G-49ZHMY3NFZ',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const auth = getAuth()
export const firestore = getFirestore()

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ params: 'select_account' })
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider).catch((error) => console.log(error))
