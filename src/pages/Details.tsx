import { useParams } from "react-router-dom";
import useReadRecordDB from "../hooks/useReadRecordDB";

function Details() {
  const params = useParams();
  const campaignId =
    typeof params?.campaignId === "string"
      ? parseInt(params?.campaignId)
      : null;
  const data = useReadRecordDB(campaignId);

  if (data === null) {
    return <h1>Invalid Id</h1>;
  }
  return <h1>This is details Page</h1>;
}

export default Details;
