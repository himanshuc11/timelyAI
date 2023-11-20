import {
  Image,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useReadRecordDB from "../hooks/useReadRecordDB";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";
import useDeleteDB from "../hooks/useDeleteDB";
import { generateImageFromBase64 } from "../utils/helpers";

function Details() {
  const params = useParams();
  const campaignId =
    typeof params?.campaignId === "string"
      ? parseInt(params?.campaignId)
      : null;
  const navigate = useNavigate();
  const data = useReadRecordDB(campaignId);
  const imgSrc = generateImageFromBase64(data?.asset);
  const { deleteRecordFromDB } = useDeleteDB();

  const handleEditClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    navigate(`/edit/${campaignId}`);
  };

  const handleDeleteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    deleteRecordFromDB(campaignId);
  };

  if (data === null) {
    return <h1>Invalid Id</h1>;
  }

  const date = new Date(data.launchDate);
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-solitude h-full min-w-screen">
      <Image
        src={imgSrc}
        alt="Green double couch with wooden legs"
        borderRadius="lg"
        className="w-full h-60"
        objectFit={"cover"}
      />
      <Stack mt="4" spacing="3">
        <Heading size="md">{data.name}</Heading>
        <Text className="truncate max-h-10">{data.description}</Text>
        <Text fontSize="lg">
          <time>{format(date, "dd MMMM yyyy")}</time>
        </Text>
      </Stack>
      <ButtonGroup spacing="2">
        <Button
          variant="solid"
          colorScheme="blue"
          className="w-24"
          onClick={handleEditClick}
        >
          Edit
        </Button>
        <Button
          variant="solid"
          colorScheme="red"
          className="w-24"
          onClick={handleDeleteClick}
        >
          Delete
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Details;
