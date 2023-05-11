Twitter exercise

In order to run the first part of the project:

1. In the 'twitter' folder find 'index.html' file.
2. Right click and choose the option 'Open with live server'

##############################################################

Corona management system for HMO

In order to run the second part of the project follow the following instructions:

1. Write in the terminal 'cd ./corona_HMO' and than 'npm start'
2. Open the 'postman'
3. Choose a POST reuest with the URL:http://localhost:8090/api/personalDetails. Choose Body and than 'raw' and change to JSON (instead of text). Than write an object such as:
   {
   "firstName": "John",
   "lastName": "Doe",
   "id": "765456781",
   "address":{"city": "New York","street": "5th Avenue", "number": "123"},
   "dateOfBirth": "1990-05-10T00:00:00.000Z",
   "telephone": "555-1234",
   "mobilePhone": "555-5678"
   }

You will see the status 201 if it succeed and 400 if not.

4. Choose a GET reuest with the URL:http://localhost:8090/api/personalDetails in order to get the lists.
5. Choose a GET reuest with the URL:http://localhost:8090/api/personalDetails/A_ID_U_WANT in order to see a spesific element .

6. The same steps of 3, 4, 5, you can do with the values: 3. POST: http://localhost:8090/api/coronaDetails,
   {
   "identityCard": "765456781",
   "vaccine1Date": "2021-01-01T00:00:00.000Z",
   "vaccine1Manufacturer": "Pfizer",
   "vaccine2Date": "2021-02-01T00:00:00.000Z",
   "vaccine2Manufacturer": "Moderna",
   "vaccine3Date": "2021-03-01T00:00:00.000Z",
   "vaccine3Manufacturer": "J&J",
   "vaccine4Date": "2021-04-01T00:00:00.000Z",
   "vaccine4Manufacturer": "AstraZeneca",
   "positiveResultDate": "2021-05-01T00:00:00.000Z",
   "recoveryDate": "2021-05-10T00:00:00.000Z"
   } 4. GET: http://localhost:8090/api/coronaDetails 5. GET: http://localhost:8090/api/coronaDetailsA_ID_U_WANT
