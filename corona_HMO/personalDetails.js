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
    mobilePhone,
    picture
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = { city: city, street: street, number: numberHome };
    this.dateOfBirth = dateOfBirth;
    this.telephone = telephone;
    this.mobilePhone = mobilePhone;
    this.picture = picture;
  }
}
module.exports = PersonalDetails;
