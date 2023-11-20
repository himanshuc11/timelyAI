import { DB } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import useOpenDB from "./useOpenDB";

function useDeleteDB() {
  const { db } = useOpenDB();
  const navigate = useNavigate();

  const storeInDB = (id: number) => {
    if (!db) throw new Error("No DB");
    const transaction = db.transaction(DB.STORE, "readwrite");
    const table = transaction.objectStore(DB.STORE);
    const record = table.delete(id);

    record.onsuccess = () => {
      navigate(0);
    };

    transaction.oncomplete = () => db.close();
  };

  return {
    deleteRecordFromDB: storeInDB,
  };
}

export default useDeleteDB;
