class CoronaDetails {
  constructor(
    identityCard,
    vaccine1Date,
    vaccine1Manufacturer,
    vaccine2Date,
    vaccine2Manufacturer,
    vaccine3Date,
    vaccine3Manufacturer,
    vaccine4Date,
    vaccine4Manufacturer,
    positiveResultDate,
    recoveryDate
  ) {
    this.identityCard = identityCard;
    this.vaccine1Date = vaccine1Date;
    this.vaccine1Manufacturer = vaccine1Manufacturer;
    this.vaccine2Date = vaccine2Date;
    this.vaccine2Manufacturer = vaccine2Manufacturer;
    this.vaccine3Date = vaccine3Date;
    this.vaccine3Manufacturer = vaccine3Manufacturer;
    this.vaccine4Date = vaccine4Date;
    this.vaccine4Manufacturer = vaccine4Manufacturer;
    this.positiveResultDate = positiveResultDate;
    this.recoveryDate = recoveryDate;
  }
}
module.exports = CoronaDetails;
