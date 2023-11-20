import { useParams } from "react-router-dom";

function Details() {
  const params = useParams();
  console.log(params);
  return <h1>This is details Page</h1>;
}

export default Details;
