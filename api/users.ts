import { firestore } from '@/lib/firebase';
import { User } from '@/types/firestore';
import { USER } from '@/constants/firestoreCollections';
import { CREATE } from '@/api/modules/useDB';
import { signUp } from '@/api/auth';
const userRef = firestore.collection(USER);

type NewUserParams = {
  name: string;
  email: string;
  password: string;
};
// ユーザーアカウントを新規作成する
export const signUpCreateUser = async ({
  name,
  email,
  password,
}: NewUserParams): Promise<boolean> => {
  const userCredential = await signUp(email, password);
  if (!userCredential) return false;

  const { uid } = userCredential.user;
  return await createUser(uid, { name });
};

// ユーザードキュメントを新規作成する
export const createUser = async (
  uid: string,
  params: User
): Promise<boolean> => {
  const docRef = userRef.doc(uid);
  return await CREATE(docRef, params);
};
