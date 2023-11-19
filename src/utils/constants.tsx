const CAMPAIGN_TYPES = ["Email", "Promotional", "Social"] as const;
const DB = {
  NAME: "TIMELY_AI",
  VERSION: 1,
  STORE: "CAMPAIGN",
} as const;

export { CAMPAIGN_TYPES, DB };
