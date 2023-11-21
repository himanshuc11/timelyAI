import { useParams, useNavigate } from "react-router-dom";
import CampaignForm from "../components/CampaignForm";
import useReadRecordDB from "../hooks/useReadRecordDB";
import useUpdateDB from "../hooks/useUpdateDB";
import { CAMPAIGN_DATA } from "../utils/types";

function EditCampaign() {
  const params = useParams();
  const campaignId =
    typeof params?.campaignId === "string"
      ? parseInt(params?.campaignId)
      : null;
  const navigate = useNavigate();
  const data = useReadRecordDB(campaignId);
  const { updateDB } = useUpdateDB();

  const handleSubmit = (data: CAMPAIGN_DATA) => {
    updateDB(campaignId, data);
    navigate("/");
  };

  if (data === null) {
    return <h1>Loading...</h1>;
  }

  return <CampaignForm {...data} head={"Edit"} handleSubmit={handleSubmit} />;
}

export default EditCampaign;
