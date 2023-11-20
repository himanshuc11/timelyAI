import { useParams } from "react-router-dom";
import CreateCampaign from "./CreateCampaign";

function EditCampaign() {
  const params = useParams();
  console.log(params);

  return <CreateCampaign />;
}

export default EditCampaign;
