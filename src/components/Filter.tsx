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

type Props = {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  getCheckboxProps: (props?: Record<string, any> | undefined) => {
    [x: string]: any;
    onChange: (eventOrValue: any) => void;
  };
};

function Filter(props: Props) {
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
              <SearchIcon color="blue.500" />
            </InputLeftElement>
            <Input
              placeholder="Campaign Name"
              color={"black"}
              fontWeight={"600"}
              borderColor="blue.500"
              style={{
                borderWidth: "2px",
              }}
              onChange={(e) => props.setSearchText(e.target.value)}
            />
          </InputGroup>
          <CheckboxGroup getCheckboxProps={props.getCheckboxProps} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default Filter;
