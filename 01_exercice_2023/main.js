//******************** NavBar **************** */

let body = document.querySelector("body");
let toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function () {
  body.classList.toggle("open");
});

//******************** firstExo **************** */

let heure = document.querySelector("#heure");
let minute = document.querySelector("#minute");
let seconde = document.querySelector("#seconde");

let inputValue = document.querySelector(".input-value");
let btn = document.querySelector(".btn-result");

const Mheures = 24;
const Mminutes = 60;
const Msecondes = 60;

btn.addEventListener("click", function () {
  let day = inputValue.value;
  let totalHeurs = day * Mheures;
  let totalMinutes = totalHeurs * Mminutes;
  let totalSecondes = totalMinutes * Msecondes;

  heure.innerHTML = `${totalHeurs} heures`;
  minute.innerHTML = `${totalMinutes} minutes`;
  seconde.innerHTML = `${totalSecondes} seconde`;
});

const person = {
  firstname: "John",
  lastName: "Doe",
  age: 24,
  note: [12, 15, 21],
  job: { name: "Cuisinier", hours: 35 },
};

// const age = 20;
// if (age === 18) {
//   console.log("Bonjour Vous etes majeur");
// } else {
//   console.log("Bonjour vous etes pas majeur");
// }
