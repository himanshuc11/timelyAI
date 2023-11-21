import {
  Accordion,
  AccordionItem,
  Box,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import CheckboxGroup from "./CheckboxGroup";

function Filter() {
  return (
    <Accordion allowToggle>
      <AccordionItem className="bg-lightPink rounded-md mb-4">
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text fontWeight={"600"}>Filter Data</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="black" />
            </InputLeftElement>
            <Input
              placeholder="Campaign Name"
              color={"black"}
              fontWeight={"600"}
              style={{
                borderWidth: "1px",
                borderColor: "black",
              }}
            />
          </InputGroup>
          <CheckboxGroup />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default Filter;
