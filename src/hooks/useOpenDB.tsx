import { useState, useEffect } from "react";
import { DB } from "../utils/constants";

function useOpenDB() {
  const [db, setDB] = useState<IDBDatabase | null>(null);
  const request = window.indexedDB.open(DB.NAME, DB.VERSION);

  useEffect(() => {
    return () => db?.close();
  }, [db]);

  request.onerror = () =>
    alert("IndexDB needs to be allowed for this app to run");

  request.onsuccess = () => {
    const db = request.result;
    setDB(db);
  };

  request.onupgradeneeded = () => {
    const db = request.result;
    const table = db.createObjectStore(DB.STORE, {
      keyPath: "id",
      autoIncrement: true,
    });

    table.createIndex("name", "name", { unique: false });
    table.createIndex("description", "description", { unique: false });
    table.createIndex("launchDate", "launchDate", { unique: false });
    table.createIndex("asset", "asset", { unique: false });
    table.createIndex("assetType", "assetType", { unique: false });
    table.createIndex("type", "type", { unique: false });
  };

  return { db };
}

export default useOpenDB;
