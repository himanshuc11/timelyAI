import { DB } from "../utils/constants";
import useOpenDB from "./useOpenDB";

function useReadDB() {
  const { db } = useOpenDB();

  if (db) {
    const transaction = db.transaction(DB.STORE, "readwrite");
    const store = transaction.objectStore(DB.STORE);
    const response = store.getAll();
    return response;
  }

  return [];
}

export default useReadDB;
