import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  label: string;
  placeholder?: string;
  isInvalid: boolean;
  children: ReactNode;
};

function FormGroup(props: Props) {
  return (
    <FormControl
      isRequired
      isInvalid={props.isInvalid}
      className="flex flex-col flex-1 items-center"
    >
      <Box className="w-full px-5 py-2.5">
        <FormLabel fontSize={"smaller"} style={{ marginBottom: "4px" }}>
          {props.label}
        </FormLabel>
        {props.children}
        <FormErrorMessage style={{ marginTop: "0" }}>
          {props.label} is required.
        </FormErrorMessage>
      </Box>
    </FormControl>
  );
}

export default FormGroup;
