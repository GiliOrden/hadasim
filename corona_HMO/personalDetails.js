class PersonalDetails {
  constructor(
    id,
    firstName,
    lastName,
    city,
    street,
    numberHome,
    dateOfBirth,
    telephone,
    mobilePhone
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = { city: city, street: street, number: numberHome };
    // this.city = city;
    // this.street = street;
    // this.number = numberHome;
    this.dateOfBirth = dateOfBirth;
    this.telephone = telephone;
    this.mobilePhone = mobilePhone;
  }
}
module.exports = PersonalDetails;
