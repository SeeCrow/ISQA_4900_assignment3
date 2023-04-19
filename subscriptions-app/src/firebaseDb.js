import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBlw4focFBqoBDZUTXCD3RYG3ZQV8R9CLM',
  authDomain: 'my-subscriptions-27991.firebaseapp.com',
  projectId: 'my-subscriptions-27991',
  storageBucket: 'my-subscriptions-27991.appspot.com',
  messagingSenderId: '859264056220',
  appId: '1:859264056220:web:e2bc7cbad8abb46650a659'
}

const db = firebase.initializeApp(firebaseConfig)
export default db.firestore()
