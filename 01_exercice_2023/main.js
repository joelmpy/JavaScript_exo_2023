//******************** NavBar **************** */

let body = document.querySelector("body")
let toggle = document.querySelector('.toggle')

toggle.addEventListener('click', function (){
    body.classList.toggle("open")
})


//******************** firstExo **************** */



















const person = {
firstname: "John",
  lastName: "Doe",
  age: 24,
  note: [12, 15, 21],
  job: { name: "Cuisinier", hours: 35 },
};


const age = 20
if (age === 18) {
    console.log('Bonjour Vous etes majeur');
} else {
    console.log('Bonjour vous etes pas majeur');
}