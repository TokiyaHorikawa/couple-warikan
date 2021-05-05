import { firebaseAuth, AuthUserCredential } from '@/lib/firebase';

// Firebase Authを新規作成する
export const signUp = async (
  email: string,
  password: string
): Promise<AuthUserCredential | void> => {
  const userCredential = await firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .catch(({ code, message }) => {
      alert(`${code}: ${message}`);
    });
  return userCredential;
};
