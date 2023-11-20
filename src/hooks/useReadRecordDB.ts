import { DB } from "../utils/constants";
import { useState, useMemo } from "react";
import useOpenDB from "./useOpenDB";
import { CAMPAIGN_DATA } from "../utils/types";

type FinalData = CAMPAIGN_DATA & { id: number };

function useReadRecordDB(id: number | null) {
  const [result, setResult] = useState<FinalData | null>(null);
  const { db } = useOpenDB();

  useMemo(() => {
    if (db && id) {
      const transaction = db.transaction(DB.STORE, "readwrite");
      const store = transaction.objectStore(DB.STORE);
      const getQuery = store.get(id);
      getQuery.onsuccess = () => {
        const data = getQuery.result as FinalData;
        setResult(data);
      };
    }
  }, [db, id]);

  if (id === null) return null;

  return result;
}

export default useReadRecordDB;
