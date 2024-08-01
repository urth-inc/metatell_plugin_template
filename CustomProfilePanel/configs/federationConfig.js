const dependencies = require("../package.json").dependencies;

module.exports = {
  name: "plugin",
  filename: "remoteEntry.js",
  exposes: {
    "./CustomProfilePanel": "./src/components/CustomProfilePanel",
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
