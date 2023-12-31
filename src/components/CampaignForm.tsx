import {
  Box,
  Heading,
  Input,
  Textarea,
  Select,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { CAMPAIGN_TYPES } from "../utils/constants";
import Uploader from "../components/Uploader";
import FormGroup from "../components/FormGroup";
import DatePicker from "../components/DatePicker";
import {
  generateBase64FromImage,
  generateFileFromBase64,
} from "../utils/helpers";
import { CAMPAIGN_DATA, Campaign } from "../utils/types";

type FormData = {
  name: string;
  description: string;
  launchDate: string;
  type: Campaign;
};

type FinalFormData = FormData & {
  asset: string | null;
  assetExtention: string;
  handleSubmit: (data: CAMPAIGN_DATA) => void;
  head: "Create" | "Edit";
};

type Props = FinalFormData | undefined;

function CampaignForm(props?: Props | undefined) {
  const [formData, setFormData] = useState<FormData>({
    name: props?.name || "",
    description: props?.description || "",
    launchDate: props?.launchDate || "",
    type: props?.type || CAMPAIGN_TYPES[0],
  });
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [shouldShowError, setShouldShowError] = useState(false);
  const [asset, setAsset] = useState<File | null>(null);

  useEffect(() => {
    const getFile = async () => {
      if (props?.asset) {
        const res = await generateFileFromBase64(
          props?.asset,
          props?.assetExtention
        );
        setAsset(res);
      }
    };
    getFile();
  }, [props?.asset]);

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

  const handleSubmit = async () => {
    const { name, launchDate, description } = formData;
    if (!name || !launchDate || !description) {
      setShouldShowError(true);
      return;
    }

    const encodedFile = await generateBase64FromImage(asset);

    const data: CAMPAIGN_DATA = {
      name,
      launchDate,
      description,
      type: formData.type,
      asset: encodedFile.file,
      assetExtention: encodedFile.type,
    };

    props?.handleSubmit(data);
  };

  const isNameError = shouldShowError && !formData.name;
  const isTypeError = shouldShowError && !formData.type;
  const isLaunchError = shouldShowError && !formData.launchDate;
  const isDescriptionError = shouldShowError && !formData.description;

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-solitude h-full min-w-screen">
      <Box
        as="section"
        className="flex flex-col w-fit items-center border bg-whiteLilac rounded-lg mt-2 h-fit"
        width={{
          base: "85%",
          lg: "50%",
        }}
      >
        <Heading as="h3" size="lg" className="m-2">
          {props?.head} your campaingn
        </Heading>
        <div className="flex flex-col sm:flex-row sm:flex-1 w-full">
          <FormGroup label="Campaign Name" isInvalid={isNameError}>
            <Input
              placeholder={"Campaign Name"}
              fontWeight={"600"}
              style={{ marginBottom: "0" }}
              name="name"
              value={formData.name}
              onChange={(e) => handleFormUpdate(e.target.name, e.target.value)}
            />
          </FormGroup>
          <FormGroup label="Campaign Type" isInvalid={isTypeError}>
            <Select
              value={formData.type}
              name="type"
              onChange={(e) => handleFormUpdate(e.target.name, e.target.value)}
            >
              {CAMPAIGN_TYPES.map((campaignType) => (
                <option value={campaignType} key={campaignType}>
                  {campaignType}
                </option>
              ))}
            </Select>
          </FormGroup>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-1 w-full items-end">
          <FormGroup label="Launch Date" isInvalid={isLaunchError}>
            <div className="relative">
              <div className="absolute">
                {isDatePickerOpen ? (
                  <DatePicker
                    updateParent={handleDate}
                    date={
                      formData?.launchDate
                        ? new Date(formData.launchDate)
                        : null
                    }
                  />
                ) : null}
              </div>
              <DatePicker updateParent={handleDate} />
            </div>
          </FormGroup>
          <FormGroup label="Asset" isInvalid={false}>
            <Uploader asset={asset} setAsset={setAsset} />
          </FormGroup>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-1 w-full items-end">
          <FormGroup
            label="Campaign Description"
            isInvalid={isDescriptionError}
          >
            <Textarea
              placeholder={"Description"}
              fontWeight={"600"}
              style={{ marginBottom: "0" }}
              name="description"
              onChange={(e) => handleFormUpdate(e.target.name, e.target.value)}
              value={formData.description}
            />
          </FormGroup>
        </div>
        <Button
          colorScheme="blue"
          className="my-3 w-3/5"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default CampaignForm;
