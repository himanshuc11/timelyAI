import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import noResult from "../assets/no-results.png";
import useDeleteDB from "../hooks/useDeleteDB";
import format from "date-fns/format";
import type { CAMPAIGN_DATA } from "../utils/types";

function CampaignCard(props: CAMPAIGN_DATA & { id: number }) {
  const { deleteRecordFromDB } = useDeleteDB();
  const imgSrc = props?.asset
    ? "data:image/png;base64," + props.asset
    : noResult;
  const navigate = useNavigate();

  const handleEditClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    navigate(`/edit/${props.id}`);
  };

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    navigate(`/details/${props.id}`);
  };

  const handleDeleteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    deleteRecordFromDB(props.id);
  };

  const date = new Date(props.launchDate);

  return (
    <Card
      maxW="sm"
      className="mb-5 h-80 cursor-pointer"
      onClick={handleCardClick}
    >
      <CardBody>
        <Image
          src={imgSrc}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          className="w-full h-24"
          objectFit={"cover"}
        />
        <Stack mt="4" spacing="3">
          <Heading size="md">{props.name}</Heading>
          <Text className="truncate max-h-10">{props.description}</Text>
          <Text fontSize="lg">
            <time>{format(date, "dd MMMM yyyy")}</time>
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2" className="-mt-6">
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
      </CardFooter>
    </Card>
  );
}

export default CampaignCard;
