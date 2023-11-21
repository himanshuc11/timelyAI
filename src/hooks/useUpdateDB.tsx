import { DB } from "../utils/constants";
import useOpenDB from "./useOpenDB";
import type { CAMPAIGN_DATA } from "../utils/types";

function useUpdateDB() {
  const { db } = useOpenDB();

  const storeInDB = (id: number | null, formData: CAMPAIGN_DATA) => {
    if (!db) throw new Error("No DB");
    if (!id) throw new Error("No ID");
    const transaction = db.transaction(DB.STORE, "readwrite");
    const table = transaction.objectStore(DB.STORE);
    const record = table.get(id);

    record.onsuccess = () => {
      for (const [key, value] of Object.entries(formData)) {
        record.result[key] = value;
      }
      table.put(record.result);
    };

    record.onerror = (e) => console.log(e);

    transaction.oncomplete = () => db.close();
  };

  return {
    updateDB: storeInDB,
  };
}

export default useUpdateDB;
