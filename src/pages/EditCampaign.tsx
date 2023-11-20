import { useParams, useNavigate } from "react-router-dom";
import CampaignForm from "../components/CampaignForm";
import useReadRecordDB from "../hooks/useReadRecordDB";

function EditCampaign() {
  const params = useParams();
  const campaignId =
    typeof params?.campaignId === "string"
      ? parseInt(params?.campaignId)
      : null;
  const navigate = useNavigate();
  const data = useReadRecordDB(campaignId);

  console.log(data);

  if (data === null) {
    return <h1>Loading...</h1>;
  }

  // @ts-ignore
  return <CampaignForm {...data} />;
}

export default EditCampaign;
