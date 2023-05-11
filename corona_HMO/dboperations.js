var config = require("./dbconfig");
const sql = require("mssql");

async function getPeopleDetails() {
  try {
    let pool = await sql.connect(config);
    let personalDetails = await pool
      .request()
      .query("SELECT * from PersonalDetails");

    return personalDetails.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getPersonDetails(personId) {
  try {
    let pool = await sql.connect(config);
    let personlDetails = await pool
      .request()
      .input("input_parameter", sql.NVarChar, personId)
      .query("SELECT * from PersonalDetails where id=@input_parameter");

    return personlDetails.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addPersonDetails(member) {
  try {
    let pool = await sql.connect(config);
    let insertMember = await pool
      .request()
      .input("id", sql.NVarChar, member.id)
      .input("firstName", sql.NVarChar, member.firstName)
      .input("lastName", sql.NVarChar, member.lastName)

      .input("city", sql.NVarChar, member.address.city)
      .input("street", sql.NVarChar, member.address.street)
      .input("number", sql.Int, member.address.number)
      .input("dateOfBirth", sql.Date, member.dateOfBirth)
      .input("telephone", sql.NVarChar, member.telephone)
      .input("mobilePhone", sql.NVarChar, member.mobilePhone)
      .execute("InsertPersonDetails");

    return insertMember.recordsets;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getPeopleDetails: getPeopleDetails,
  getPersonDetails: getPersonDetails,
  addPersonDetails: addPersonDetails,
};
