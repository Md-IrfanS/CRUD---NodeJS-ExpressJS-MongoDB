require("dotenv").config();

switch (process.env.NODE_ENV) {
  case "development":
    module.exports = require("./dev");
    break;
  default:
    module.exports = require("./dev");
    break;
}


