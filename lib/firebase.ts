import fb from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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

export const firebase = !fb.apps.length ? fb.initializeApp(config) : fb.app();
export const firestore = firebase.firestore();
export const firebaseAuth = firebase.auth();

export const firestoreServerTimestamp = fb.firestore.FieldValue.serverTimestamp();

// Type
export type FirebaseUser = fb.User;
export type Query = fb.firestore.Query;
export type DocRef = fb.firestore.DocumentReference;
export type QuerySnapshot = fb.firestore.QuerySnapshot;
export type DocSnapshot = fb.firestore.DocumentSnapshot;
export type CollectionRef = fb.firestore.CollectionReference;
export type FieldPath = fb.firestore.FieldPath;
export type AuthUserCredential = fb.auth.UserCredential;
