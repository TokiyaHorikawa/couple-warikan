import { firebaseAuth } from '@/lib/firebase';
import type { AuthUserCredential } from '@/lib/firebase';

// Firebase Authを新規作成する
export async function signUp(
  email: string,
  password: string
): Promise<AuthUserCredential | void> {
  const userCredential = await firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .catch(({ code, message }) => {
      alert(`${code}: ${message}`);
    });
  return userCredential;
}

export async function login(
  email: string,
  password: string
): Promise<AuthUserCredential> {
  try {
    const userCredential = await firebaseAuth.signInWithEmailAndPassword(
      email,
      password
    );
    return userCredential;
  } catch ({ code, message }) {
    alert(`${code}: ${message}`);
  }
}
