import { getEnvVar } from "./utils/index.js";

export const Keys = {
  discordClientToken: getEnvVar("DISCORD_CLIENT_TOKEN"),
} as const;

export default Keys;
