import fb from 'firebase/app';

export type Timestamp = fb.firestore.Timestamp;
type ServerTimeStamp = fb.firestore.FieldValue | Timestamp;

export type AuthUser = fb.User;

export type User = {
  id?: string;
  name: string;
  created_at?: ServerTimeStamp;
  updated_at?: ServerTimeStamp;
};
