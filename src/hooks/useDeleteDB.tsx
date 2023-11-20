import { DB } from "../utils/constants";
import useOpenDB from "./useOpenDB";

function useUpdateDB() {
  const { db } = useOpenDB();

  const storeInDB = (id: number) => {
    if (!db) throw new Error("No DB");
    const transaction = db.transaction(DB.STORE, "readwrite");
    const table = transaction.objectStore(DB.STORE);
    const record = table.delete(id);

    record.onsuccess = () => {
      console.log("Success");
    };

    transaction.oncomplete = () => db.close();
  };

  return {
    deleteRecordFromDB: storeInDB,
  };
}

export default useUpdateDB;
