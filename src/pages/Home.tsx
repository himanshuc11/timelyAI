import CampaignCard from "../components/CampaignCard";
import useReadDB from "../hooks/useReadDB";

function Home() {
  const data = useReadDB();

  return (
    <div className="bg-solitude h-full min-w-screen pt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid px-6">
      {data?.map((cardData) => (
        <CampaignCard {...cardData} key={cardData.id} />
      ))}
    </div>
  );
}

export default Home;
