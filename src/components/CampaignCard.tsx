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
import noResult from "../assets/no-results.png";
import type { CAMPAIGN_DATA } from "../utils/types";

function CampaignCard(props: CAMPAIGN_DATA) {
  const imgSrc = props?.asset
    ? "data:image/png;base64," + props.asset
    : noResult;

  return (
    <Card maxW="sm" className="mb-5">
      <CardBody>
        <Image
          src={imgSrc}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          className="w-full h-32"
          objectFit={"contain"}
        />
        <Stack mt="4" spacing="3">
          <Heading size="md">{props.name}</Heading>
          <Text>{props.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            <time>{props.launchDate}</time>
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2" className="-mt-6">
          <Button variant="solid" colorScheme="blue" className="w-24">
            Edit
          </Button>
          <Button variant="solid" colorScheme="red" className="w-24">
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CampaignCard;
