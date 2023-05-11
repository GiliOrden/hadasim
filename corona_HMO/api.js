var dboperations = require("./dboperations");
var coronaOperations = require("./coronaOperations");

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);


// ###################### get/getAll / post for the personalDetails table
router.route("/personalDetails").get((request, response) => {
  dboperations.getPeopleDetails().then((result) => {
    //console.log(result);
    response.json(result[0]);
  });
});

router.route("/personalDetails/:id").get((request, response) => {
  dboperations.getPersonDetails(request.params.id).then((result) => {
    //console.log(result);
    response.json(result[0]);
  });
});

router.route("/personalDetails").post((request, response) => {
  let personDetails = { ...request.body };
  dboperations
    .addPersonDetails(personDetails)
    .then(() => {
      response.status(201).send("success , the member added");
    })
    .catch((error) => {
      response.status(400).send("Failed to add member: " + error.message);
    });
});
// ###################### get/getAll / post for the coronaDetails table
router.route("/coronaDetails").get((request, response) => {
  coronaOperations.getAllCoronaDetails().then((result) => {
    response.json(result[0]);
  });
});

router.route("/coronaDetails/:identityCard").get((request, response) => {
  coronaOperations
    .getCoronaDetails(request.params.identityCard)
    .then((result) => {
      response.json(result[0]);
    });
});

router.route("/coronaDetails").post((request, response) => {
  let coronaDetails = { ...request.body };

  coronaOperations
    .addCoronaDetails(coronaDetails)
    .then(() => {
      response.status(201).send("success , the corona details added");
    })
    .catch((error) => {
      response
        .status(400)
        .send("Failed to add corona details: " + error.message);
    });
});



var port = process.env.PORT || 8090;
app.listen(port);
console.log("API is running at " + port);
