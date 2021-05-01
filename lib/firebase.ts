import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/analytics';

// .env に設定した値を取得してる
const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BACKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  timestampsInSnapshots: true,
};

// appの初期化
if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.analytics();
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}

export default firebase;
export const firestore = firebase.firestore();
export const firebaseAuth = firebase.auth();
