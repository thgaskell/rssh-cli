import React from "react";
import { readConfigurationFile } from "../utils/config";

const useConfiguration = () => {
  const [configuration, setConfiguration] = React.useState<any>();

  React.useEffect(() => {
    async function fetchConfiguration() {
      const configurationFile = (await readConfigurationFile()).toString();
      setConfiguration(configurationFile);
    }
    fetchConfiguration();
  }, []);

  return configuration;
};

export default useConfiguration;
