var config = require("./dbconfig");
const sql = require("mssql");

async function getAllCoronaDetails() {
  try {
    let pool = await sql.connect(config);
    let coronaDetails = await pool
      .request()
      .query("SELECT * from coronaDetails");

    return coronaDetails.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getCoronaDetails(memberId) {
  try {
    let pool = await sql.connect(config);
    let personlDetails = await pool
      .request()
      .input("input_parameter", sql.NVarChar, memberId)
      .query("SELECT * from coronaDetails where identityCard=@input_parameter");

    return personlDetails.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addCoronaDetails(coronaDetails) {
  try {
    let pool = await sql.connect(config);

    let insertCoronaDetails = await pool
      .request()
      .input("identityCard", sql.NVarChar, coronaDetails.identityCard)
      .input("vaccine1Date", sql.Date, coronaDetails.vaccine1Date)
      .input(
        "vaccine1Manufacturer",
        sql.NVarChar,
        coronaDetails.vaccine1Manufacturer
      )
      .input("vaccine2Date", sql.Date, coronaDetails.vaccine2Date)
      .input(
        "vaccine2Manufacturer",
        sql.NVarChar,
        coronaDetails.vaccine2Manufacturer
      )
      .input("vaccine3Date", sql.Date, coronaDetails.vaccine3Date)
      .input(
        "vaccine3Manufacturer",
        sql.NVarChar,
        coronaDetails.vaccine3Manufacturer
      )
      .input("vaccine4Date", sql.Date, coronaDetails.vaccine4Date)
      .input(
        "vaccine4Manufacturer",
        sql.NVarChar,
        coronaDetails.vaccine4Manufacturer
      )
      .input("positiveResultDate", sql.Date, coronaDetails.positiveResultDate)

      .input("recoveryDate", sql.Date, coronaDetails.recoveryDate)

      .execute("InsertCoronaDetails");

    return insertCoronaDetails.recordsets;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getCoronaDetails: getCoronaDetails,
  getAllCoronaDetails: getAllCoronaDetails,
  addCoronaDetails: addCoronaDetails,
};
