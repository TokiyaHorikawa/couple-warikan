import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { firebaseAuth } from '@/lib/firebase';
import type { FirebaseUser } from '@/lib/firebase';

type ReturnAuth = {
  auth: FirebaseUser;
};

const authAtom = atom<FirebaseUser>({
  key: 'authAtom',
  default: null,
});

export function useAuth(): ReturnAuth {
  const [auth, setAuth] = useRecoilState(authAtom);

  useEffect(() => {
    if (auth) return;
    firebaseAuth.onAuthStateChanged((user) => setAuth(user));
  }, []);

  return { auth };
}

// NOTE: ブラウザ上でのみ行う
if (process.browser) {
  useAuth();
}
