const emailjs = require('emailjs');


//set the parameter as per you template parameter[https://dashboard.emailjs.com/templates]
const to_name = process.env.TO_NAME;
const from_name = document.getElementById("name").value;
const message = document.getElementById("message").value;
const subject = document.getElementById("subject").value;
const form = document.querySelector("form");

const templateParams = {
  to_name,
  from_name,
  message,
  subject,
};
const SERVICE_ID = process.env.SERVICE_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;

form.addEventListener("submit", (e) => {
  e.preventDefault();


  console.log(templateParams);

  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams).then(
    (response) => {
      // console.log("SUCCESS!", response.status, response.text);
      alert("Mail Sent Successfully");
    },
    (error) => {
      // console.log("FAILED...", error);
      alert("Mail Not Sent");
    }
  );
});

