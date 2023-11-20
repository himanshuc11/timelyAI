import { DB } from "../utils/constants";
import { useState, useMemo } from "react";
import useOpenDB from "./useOpenDB";
import { CAMPAIGN_DATA } from "../utils/types";

type FinalData = CAMPAIGN_DATA & { id: number };

function useReadDB() {
  const [result, setResult] = useState<FinalData[]>([]);
  const { db } = useOpenDB();
  useMemo(() => {
    if (db) {
      const transaction = db.transaction(DB.STORE, "readwrite");
      const store = transaction.objectStore(DB.STORE);
      const getQuery = store.getAll();
      getQuery.onsuccess = () => {
        const data = getQuery.result as FinalData[];
        setResult(data);
      };
    }
  }, [db]);

  return result;
}

export default useReadDB;
