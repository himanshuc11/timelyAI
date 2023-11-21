import CampaignCard from "../components/CampaignCard";
import Filter from "../components/Filter";
import useReadDB from "../hooks/useReadDB";

function Home() {
  const data = useReadDB();

  return (
    <section className="h-full min-w-screen pt-6 px-6 ">
      <search>
        <Filter />
      </search>
      <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid">
        {data?.map((cardData) => (
          <CampaignCard {...cardData} key={cardData.id} />
        ))}
      </div>
    </section>
  );
}

export default Home;
