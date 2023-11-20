import CampaignCard from "../components/CampaignCard";

function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-solitude min-h-screen min-w-screen">
      <div className="gap-x-5 mx-5">
        <CampaignCard />
      </div>
    </div>
  );
}

export default Home;
