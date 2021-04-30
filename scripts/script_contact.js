//--- Adding a Google Map with a Marker to the Contact Page
// Initialize and add the map
function initMap() {
  // The location of Birkbeck
  const bbk = { lat: 51.522, lng: -0.130};
  // The map, centered at Birkbeck
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: bbk,
  });
  // The marker, positioned at Birkbeck
  const marker = new google.maps.Marker({
    position: bbk,
    map: map,
  });
}

//--- Contact form submission
const formFitU = document.querySelector("#contactForm");

function formSubmit(event){
  log.textContent = "Thank you! Your message has been sent.";
  // Don't refresh the page after clicking the submit button
  event.preventDefault();

  const formName = document.getElementById("contact-name");
  const formEmail = document.getElementById("contact-email");
  const formSubject = document.getElementById("contact-subject");
  const formMessage = document.getElementById("contact-message");

  // Print the message in console log
  console.log("Name: ", formName.value);
  console.log("Email: ", formEmail.value);
  console.log("Subject: ", formSubject.value);
  console.log("Message: ", formMessage.value);
}

const form = document.getElementById("contactForm");
form.addEventListener("submit",formSubmit);