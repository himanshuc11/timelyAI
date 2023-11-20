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

function CampaignCard() {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={noResult}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          className="w-full h-32"
          objectFit={"contain"}
        />
        <Stack mt="4" spacing="3">
          <Heading size="md">Campaign Name</Heading>
          <Text>
            {/* Campaign Description */}
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="blue.600" fontSize="2xl">
            <time>Date and time</time>
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
