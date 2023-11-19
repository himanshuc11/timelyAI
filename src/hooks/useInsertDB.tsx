import { DB } from "../utils/constants";
import useOpenDB from "./useOpenDB";

function useInsertDB() {
  const { db } = useOpenDB();

  const storeInDB = (formData: object) => {
    if (!db) throw new Error("No DB");
    const transaction = db.transaction(DB.STORE, "readwrite");
    const table = transaction.objectStore(DB.STORE);
    table.put(formData);
    transaction.oncomplete = () => db.close();
  };

  return {
    insertIntoDB: storeInDB,
  };
}

export default useInsertDB;
