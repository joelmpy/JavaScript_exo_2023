let integer = 102;
let float = 13.9;
// console.log(float + integer)

// let basic = 34;
// let stringified = basic.toString()
// console.log(stringified)

// let num = 1.5
// let rounded = Math.round(num)
// console.log(rounded);

// let test = 12
// let bis = 5

// console.log(test + bis);
// console.log(test * bis);
// console.log(test / bis);
// console.log(test - bis);
// console.log("--------------");
// console.log(test += bis);
// console.log(test *= bis);
// console.log(test /= bis);

// let test = 143;
// let bis = 219;

// console.log(test > bis);
// console.log(test < bis);
// console.log(test <= bis);
// console.log(test >= bis);
// console.log("--------------");

// - Créez une variable `limit` de valeur `50` et une variable `score` de valeur `64`
// - Créez une condition : si le score est supérieur ou égal à la limite, affichez "Ok good !", sinon affichez "Oh nooo..."

// let limit = 45
// let score = 45

// // if(score >= limit) {
// //     console.log('Ok good !');
// // }else {
// //     console.log("Oh nooo...");
// // }

// let password = "azer"

// ## 07 - Condition II

// - Créez une variable `password` de valeur `"azerty"`
// - À l'aide d'une condition, affichez "The password is secure" si `password` a une longueur plus grande que 5

// if(password.length > 5) {
//     console.log("The password is secure")
// }else {
//     console.log("The password is no secure for you");
// }

// - Combinez les deux conditions précedents (exercices 6 et 7)
// - Afficher "Everything is good" si les deux conditions sont vraies
// - Afficher "Something is good" si une des deux conditions est vraie

// if (score > limit || password.length > 5 ){
//     console.log("Everything is good");
// } else if (score < limit || password.length > 8) {
//     console.log( "Something is good");
// } else {
//     console.log("Nothing is good");
// }

// - Créez une variable `random` qui contient une valeur aléatoire entre 1 et 6 (nombres entiers seulement)
// - À l'aide d'une condition, affichez "Yes I win !" si `random` est égal à 6, et "So close..." dans les autres cas

let min = 1;
let max = 6;
let random = Math.floor(Math.random() * (max - min + 1) + min);

if (random === 6) {
  console.log("Yes I win !" + "" + random);
} else {
  console.log("So close..." + "" + random);
}

let month = "April";

switch (month) {
  case "January":
    console.log("Winter");
    break;
  case "October":
    console.log("Spring");
    break;
  case "June":
    console.log("Summer");
    break;
  case "April":
    console.log("Fall");
    break;

  default:
    console.log("That's not a season...");
}

// - Créez une variable `fruits` qui contiendra un tableau avec les valeurs `"mango"`, `"lemon"` et `"blueberry"`
// - Affichez `fruits` dans la console
let fruits = ["mango", "lemon", "blueberry"];
// console.table(fruits)

// - Créez une variable `ingredients` qui contiendra un tableau avec les valeurs `"eggs"`, `"milk"` et `"butter"`
// - Faites apparaître `"milk"` dans la console

let ingredients = ["eggs", "milk", "butter"];
// console.table(ingredients[1])
// console.log(ingredients.indexOf("butter"))

// - Créez une variable `objects` qui contiendra un tableau avec les valeurs `"pen"`, `"book"` et `"lamp"`
// - Ajoutez `"chair"` au début du tableau puis affichez le résultat
// - Enlevez `"lamp"` puis affichez le résultat
// - Ajoutez `"laptop"` à la fin du tableau puis affichez le résultat
// - Enlevez `"chair"` puis affichez le résultat

let objets = ["pen", "book", "lamp"];
// objets.unshift("chair")
// objets.pop()
// objets.push('laptop')
// objets.shift()
// console.log(objets)

// ## 04 - Order

// - Créez une variable `numbers` qui contiendra un tableau avec les valeurs `4`, `10`, `8`, `12` et `6`
// - Inversez l'ordre des éléments de `numbers` puis affichez le résultat
// - Rangez les éléments de `numbers` dans l'ordre croissant puis affichez le résultat

let numbers = [4, 10, 8, 12, 6];
// console.log(numbers.reverse())
// numbers.sort((a, b) => a - b)
// console.log(numbers)

// - Créez une variable `total` de valeur `0` et une variable `limit` de valeur `10`
// - À l'aide d'une boucle for allant de`0` à `limit`, augmentez la valeur de `total` en lui ajoutant la valeur de `i` (i est l'index de votre boucle)
// - Affichez la valeur de `total` après votre boucle, total doit valoir 55 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

// let total = 0
// let limit = 10

// for(i = 0; i <= limit; i++){
//    total += i
//     console.log("parfaite result" + total);
// }

// console.log(total);

// let finish = 100

// for(i = 0; i <= finish; i++){
//     if(i % 3 === 0){
//         console.log("fizz");
//     } else if (i % 3 & 5 === 0){
//         console.log("buzz");
//     } else if (i % 7 === 0) {
//         console.log("rien ici");
//     } else {
//         console.log(i);
//     }
// }

// class cat {
//     constructor(name, age, isCute){
//         this.name = name
//         this.age = age
//         this.isCute = isCute
//     }
// }
// let fullCat = new cat("Garfield", 3, true)
// if(fullCat.isCute){
//     console.log("Is Good !");
// }else {
//     console.log("is no good !");
// }

// var cat2 = {
//     name: "Félix",
//     age: 5,
//     isCute: false,
//     // properties: {
//     //     color: "black & white",
//     //     jump: 15
//     // }
// };

// var cats = [cat, cat2];

// // console.log(cats)

// console.log("Age of cat 2", cats[0].age)
// console.log("cat2 isCute? ", cat2.isCute);
// console.log("cat2 isCute? 2", cat2["isCute"])
// console.log("cat2 isCute? 3", cats[1].isCute)
// console.log("cat2 isCute? 4", cats[1]["isCute"])

// var keyName = "isCute"
// console.log("cat2 isCute? 5", cat2[keyName])
// console.log("cat2 isCute? 6", cats[1][keyName])

function checkIfEven(num) {
  if (num % 2 === 0) {
    console.log("num is pair", num);
  } else {
    console.log("il esr impair", num);
  }
}

checkIfEven(2);

function compare(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is bigger`);
  } else if (num2 > num1) {
    console.log(`${num2} is bigger`);
  } else {
    console.log("both are the same");
  }
}

compare(20, 15);
compare(25, 40);
compare(30, 80);

let minCarre = 5;
let maxCarre = 10;
let sum = 0;

for (let i = 5; i <= 10; i++) {
  sum += i * i;
}

console.log(sum);

function addUp(num) {
  var sum = 0;

  for (var i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
}

var result = addUp(12);
console.log(result);
addUp(12);

// let p = document.createElement('p')
// document.getElementById('main-new').appendChild(p)
// p.innerHTML = "<strong>Mon plus grand</strong>"
// p.style.color = "black"

// Récupération des eventements 

let parent = document.getElementById("parent");
let countParent = document.getElementById("parent-count");
let parentClicks = 0;
let childClicks = 0;

parent.addEventListener("click", function (event) {
  countParent.innerHTML = ++parentClicks + "";
  event.preventDefault();
});

document.getElementById("child").addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  document.getElementById("child-count").innerHTML = ++childClicks + "";
});


document.getElementById("name").
addEventListener('input', function(e){
    document.getElementById('res-name').innerHTML = e.target.value
})

document.getElementById('gender').
addEventListener('change', function(e){
    document.getElementById('res-gender').innerHTML = e.target.value
})


// Requete http //

function askHello (){
    fetch('https://mockbin.com/request?greetings=salut')
    .then(function(res){
        if (res.ok){
           return res.json()
        }
    })
    .then(function(value){
        console.log(value);
        document.getElementById('result-url')
        .innerHTML = value.queryString.greetings
   
    })
    .catch(function(err){
        console.log(err, "c'est pas bon");
    })
}

document.getElementById('ask-hello')
.addEventListener('click', askHello)




