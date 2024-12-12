const dependencies = require("../package.json").dependencies;
const process = require("process");

module.exports = {
  name: process.env.VERSION_ID,
  filename: "remoteEntry.js",
  exposes: {
    "./CustomMegaphoneButton": "./src/components/CustomMegaphoneButton",
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
