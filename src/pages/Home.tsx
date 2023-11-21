import { useMemo, useState } from "react";
import { useCheckboxGroup } from "@chakra-ui/react";
import CampaignCard from "../components/CampaignCard";
import Filter from "../components/Filter";
import useReadDB from "../hooks/useReadDB";
import { CAMPAIGN_TYPES } from "../utils/constants";
import type { CAMPAIGN_DATA } from "../utils/types";

type FinalData = CAMPAIGN_DATA & { id: number };

function filterBasedOnSearch(searchText: string, records: FinalData[]) {
  const cleanText = searchText.trim().toLowerCase();
  if (cleanText === "") {
    return records;
  }
  const filteredRecords = records?.filter((record) => {
    const lowerCaseName = record.name.toLowerCase();
    return lowerCaseName.includes(cleanText);
  });
  return filteredRecords;
}

function filterBasedOnType(checkedTypes: string[], records: FinalData[]) {
  if (
    checkedTypes.length === 0 ||
    checkedTypes.length === CAMPAIGN_TYPES.length
  )
    return records;

  const selectedTypes = new Set(checkedTypes);
  const filteredRecords = records.filter((record) => {
    return selectedTypes.has(record.type);
  });
  return filteredRecords;
}

function Home() {
  const [searchText, setSearchText] = useState("");
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [],
  });
  const data = useReadDB();

  const finalData = useMemo(() => {
    if (searchText.trim() === "" && value.length === 0) return data;
    const filterBySearch = filterBasedOnSearch(searchText, data);
    const filterByType = filterBasedOnType(value as string[], filterBySearch);
    return filterByType;
  }, [data, searchText, value]);

  return (
    <section className="h-full min-w-screen pt-6 px-6 ">
      <search>
        <Filter
          setSearchText={setSearchText}
          getCheckboxProps={getCheckboxProps}
        />
      </search>
      <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid">
        {finalData?.map((cardData) => (
          <CampaignCard {...cardData} key={cardData.id} />
        ))}
      </div>
    </section>
  );
}

export default Home;
