import { CAMPAIGN_TYPES } from "./constants";

type Campaign = (typeof CAMPAIGN_TYPES)[number];

type CAMPAIGN_DATA = {
  name: string;
  description: string;
  launchDate: string;
  asset: string;
  assetExtention: string;
  type: Campaign;
};

export type { CAMPAIGN_DATA, Campaign };
