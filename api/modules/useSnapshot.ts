import { QuerySnapshot, DocSnapshot } from '@/lib/firebase';

// snapshotからデータを取り出す
export const getData = <T>(snapshot: QuerySnapshot | DocSnapshot): T => {
  const isDoc = !!snapshot['id'];
  const data = isDoc
    ? getDataForDocument(snapshot as DocSnapshot)
    : getDataForQuerySnapshot(snapshot as QuerySnapshot);
  return data as T;
};

// DocumentSnapshotから単体のデータを取り出す
const getDataForDocument = (doc: DocSnapshot) => {
  const data = doc.data();
  data.id = doc.id;
  return data;
};

// QuerySnapshotから複数のデータを取り出す
const getDataForQuerySnapshot = (querySnapshot: QuerySnapshot) => {
  const dataArr = querySnapshot.docs.map((doc) => getDataForDocument(doc));
  return dataArr;
};
