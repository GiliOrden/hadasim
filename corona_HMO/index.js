//const PersonalDetails = require("PersonalDetails");

const form = document.getElementById("personal-details-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const personalDetails = new PersonalDetails(
    formData.get("id"),
    formData.get("firstName"),
    formData.get("lastName"),
    formData.get("city"),
    formData.get("street"),
    formData.get("numberHome"),
    formData.get("dateOfBirth"),
    formData.get("telephone"),
    formData.get("mobilePhone"),
    formData.get("picture")
  );

  fetch("/personal-details", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(personalDetails),
  })
    .then((response) => {
      if (response.ok) {
        alert("Personal details submitted successfully!");
        form.reset();
      } else {
        alert("Error submitting personal details. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error submitting personal details:", error);
      alert("Error submitting personal details. Please try again.");
    });
});
