var config = require("../dbconfig");
const sql = require("mssql");

async function checkDetails(isolatin) {
  if (
    isolatin.datumPoint &&
    isolatin.exposureDate &&
    isolatin.recoveryDate &&
    isolatin.isolatedPeople.length
  ) {
    return true;
  } else {
    throw new Error("Missing field in the request");
  }
}

module.exports = {
  checkDetails: checkDetails,
};
