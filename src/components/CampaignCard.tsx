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
import useDeleteDB from "../hooks/useDeleteDB";
import { format, isBefore, isSameDay } from "date-fns";
import type { CAMPAIGN_DATA } from "../utils/types";
import { generateImageFromBase64 } from "../utils/helpers";

function CampaignCard(props: CAMPAIGN_DATA & { id: number }) {
  const { deleteRecordFromDB } = useDeleteDB();
  const imgSrc = generateImageFromBase64(props.asset);
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
  const disabled = isBefore(date, new Date()) || isSameDay(date, new Date());

  return (
    <Card
      maxW="sm"
      className="mb-5 h-76 cursor-pointer"
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
          <Heading size="md">
            {props.name}({props.type})
          </Heading>
          <Text className="truncate max-h-10">{props.description}</Text>
          <Text fontSize="sm">
            <time>{format(date, "dd MMMM yyyy")}</time>
          </Text>
        </Stack>
      </CardBody>
      <CardFooter className="-mt-6">
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="blue"
            className="w-24"
            onClick={handleEditClick}
            isDisabled={disabled}
          >
            Edit
          </Button>
          <Button
            variant="solid"
            colorScheme="red"
            className="w-24"
            onClick={handleDeleteClick}
            isDisabled={disabled}
          >
            Delete
          </Button>
          <Text colorScheme="red" className="text-[#dc2626] mt-2 mx-auto">
            {disabled ? "Campaign over" : ""}
          </Text>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CampaignCard;
