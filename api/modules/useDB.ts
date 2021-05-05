import {
  firestoreServerTimestamp as timestamp,
  Query,
  DocRef,
  QuerySnapshot,
  DocSnapshot,
} from '@/lib/firebase';
import { getData } from '@/api/modules/useSnapshot';

const registerTimestamp = {
  created_at: timestamp,
  updated_at: timestamp,
};
const updateTimestamp = { updated_at: timestamp };

// 読み込み失敗時の処理
const getError = (err) => alert('データの読み込みに失敗しました');

// 書き込み成功時の処理
const writeSuccess = () => true;

// 書き込み失敗時の処理
const writeError = (err) => {
  alert('データの書き込みに失敗しました');
  return false;
};

// データ取得
export const GET = async <T>(query: Query | DocRef): Promise<T> => {
  // FIXME: as anyでTSエラー回避=>解決策を見つける
  const data = await (query as any)
    .get()
    .then((snapshot: QuerySnapshot | DocSnapshot) => getData<T>(snapshot))
    .catch((err) => getError(err));
  return data;
};

// 新規作成
export const CREATE = async <P>(
  doc: DocRef,
  params: P,
  options?: { merge: boolean }
): Promise<boolean> => {
  const registerParams = { ...params, ...registerTimestamp };

  const isSuccess = await doc
    .set(registerParams, options)
    .then(() => writeSuccess())
    .catch((err) => writeError(err));
  return isSuccess;
};

// 更新
export const UPDATE = async <P>(doc: DocRef, params: P): Promise<boolean> => {
  const updateParams = { ...params, ...updateTimestamp };

  const isSuccess = await doc
    .update(updateParams)
    .then(() => writeSuccess())
    .catch((err) => writeError(err));
  return isSuccess;
};

// 削除
export const DELETE = async (doc: DocRef): Promise<boolean> => {
  const isSuccess = await doc
    .delete()
    .then(() => writeSuccess())
    .catch((err) => writeError(err));
  return isSuccess;
};
