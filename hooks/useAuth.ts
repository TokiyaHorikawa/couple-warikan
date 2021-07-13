import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { firebaseAuth } from '@/lib/firebase';
import type { FirebaseUser } from '@/lib/firebase';
import { login as loginApi } from '@/api/auth';

type ReturnAuth = {
  auth: FirebaseUser;
  login: (email: string, password: string) => Promise<void>;
};

const authAtom = atom<FirebaseUser>({
  key: 'authAtom',
  default: null,
});

export function useAuth(): ReturnAuth {
  const [auth, setAuth] = useRecoilState(authAtom);

  const login = async (email: string, password: string) => {
    const userCredential = await loginApi(email, password);
    const user = userCredential.user;
    setAuth(user);
  };

  useEffect(() => {
    if (auth) return;
    firebaseAuth.onAuthStateChanged((user) => setAuth(user));
  }, []);

  return { auth, login };
}

// NOTE: ブラウザ上でのみ行う
if (process.browser) {
  useAuth();
}
