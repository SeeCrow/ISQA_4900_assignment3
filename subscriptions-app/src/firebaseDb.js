import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBLT93o0zIZN1BpH3l_UOpVN-C2ctocY5s',
  authDomain: 'my-subscriptions-ca838.firebaseapp.com',
  projectId: 'my-subscriptions-ca838',
  storageBucket: 'my-subscriptions-ca838.appspot.com',
  messagingSenderId: '784865063533',
  appId: '1:784865063533:web:5ecef64666552df03e8564'
}

const db = firebase.initializeApp(firebaseConfig)
export default db.firestore()
