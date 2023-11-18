import {
  Box,
  Heading,
  Input,
  Textarea,
  Select,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { CAMPAIGN_TYPES } from "./utils/constants";
import Uploader from "./components/Uploader";
import FormGroup from "./components/FormGroup";
import DatePicker from "./components/DatePicker";

type Campaign = (typeof CAMPAIGN_TYPES)[number];

type FormData = {
  name: "";
  description: "";
  launchDate: "";
  type: Campaign;
};

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    launchDate: "",
    type: CAMPAIGN_TYPES[0],
  });
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleFormUpdate = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDate = (date: Date) => {
    handleFormUpdate("launchDate", date.toISOString());
    setIsDatePickerOpen(false);
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-solitude min-h-screen min-w-screen">
      <Box
        as="section"
        className="flex flex-col w-fit items-center border bg-whiteLilac rounded-lg mt-2 h-fit"
        width={{
          base: "85%",
          lg: "50%",
        }}
      >
        <Heading as="h3" size="lg" className="m-2">
          Create your campaingn
        </Heading>
        <div className="flex flex-col sm:flex-row sm:flex-1 w-full">
          <FormGroup label="Campaign Name" isInvalid={false}>
            <Input
              placeholder={"Campaign Name"}
              fontWeight={"600"}
              style={{ marginBottom: "0" }}
              name="name"
              onChange={(e) => handleFormUpdate(e.target.name, e.target.value)}
            />
          </FormGroup>
          <FormGroup label="Campaign Type" isInvalid={false}>
            <Select
              value={formData.type}
              name="type"
              onChange={(e) => handleFormUpdate(e.target.name, e.target.value)}
            >
              {CAMPAIGN_TYPES.map((campaignType) => (
                <option value={campaignType}>{campaignType}</option>
              ))}
            </Select>
          </FormGroup>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-1 w-full items-end">
          <FormGroup label="Launch Date" isInvalid={false}>
            <div className="relative">
              <div className="absolute">
                {isDatePickerOpen ? (
                  <DatePicker updateParent={handleDate} />
                ) : null}
              </div>
              <DatePicker updateParent={handleDate} />
            </div>
          </FormGroup>
          <FormGroup label="Asset" isInvalid={false}>
            <Uploader />
          </FormGroup>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-1 w-full items-end">
          <FormGroup label="Campaign Description" isInvalid={false}>
            <Textarea
              placeholder={"Description"}
              fontWeight={"600"}
              style={{ marginBottom: "0" }}
              name="description"
              onChange={(e) => handleFormUpdate(e.target.name, e.target.value)}
            />
          </FormGroup>
        </div>
        <Button colorScheme="blue" className="my-3 w-3/5">
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default App;