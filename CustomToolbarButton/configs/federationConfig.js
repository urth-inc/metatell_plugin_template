const dependencies = require("../package.json").dependencies;

module.exports = {
  name: "plugin",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/components/Button",
    "./CustomToolbarButton": "./src/components/CustomToolbarButton",
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
