import CampaignCard from "../components/CampaignCard";
import useReadDB from "../hooks/useReadDB";

function Home() {
  const data = useReadDB();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-solitude h-full min-w-screen">
      {data?.map((cardData) => (
        <CampaignCard {...cardData} key={cardData.id} />
      ))}
      {/* <CampaignCard {...data?.[0]} /> */}
    </div>
  );
}

export default Home;
