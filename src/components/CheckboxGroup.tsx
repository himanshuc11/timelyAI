import {
  chakra,
  useCheckbox,
  Flex,
  Text,
  Box,
  Stack,
  UseCheckboxProps,
} from "@chakra-ui/react";
import { CAMPAIGN_TYPES } from "../utils/constants";

type Props = {
  getCheckboxProps: (props?: Record<string, any> | undefined) => {
    [x: string]: any;
    onChange: (eventOrValue: any) => void;
  };
};

function CustomCheckbox(props: UseCheckboxProps | undefined) {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    <chakra.label
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridColumnGap={2}
      bg="blue.50"
      border="1px solid"
      borderColor="blue.500"
      rounded="lg"
      px={3}
      py={1}
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        border="2px solid"
        borderColor="blue.500"
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && <Box w={2} h={2} bg="blue.500" />}
      </Flex>
      <Text color="black" {...getLabelProps()} fontWeight={"600"}>
        Promotional Type {props?.value}
      </Text>
    </chakra.label>
  );
}

function CheckboxGroup(props: Props) {
  return (
    <Stack className="mt-4">
      <Text fontWeight={"600"}>Types to filter upon</Text>
      {CAMPAIGN_TYPES.map((campaignType) => (
        <CustomCheckbox
          key={campaignType}
          {...props.getCheckboxProps({ value: campaignType })}
        />
      ))}
    </Stack>
  );
}

export default CheckboxGroup;
