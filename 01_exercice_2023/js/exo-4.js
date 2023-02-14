let array = [1, 2, 3, 4, 5];
let double = array.map(function (num) {
  return num * 2;
});

// 03 - Map Names //
let longNames = [
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "John",
    lastName: "Smith",
  },
];

let shortNames = longNames.map(function (name) {
  return name.firstName;
});

// ## 04 - Filter Numbers //
let newArray = [1, "toto", 34, "javascript", 8]
let numbers = newArray.filter(function(names){
    return names > 0
})


// 05 - Filter Even //

let multipe = [1,2,,3,4,5,6,7,8,9]
let even = multipe.filter(function(numbers){
    return numbers % 2 
})


// 06 - Cakes //

let cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

let newTable = cakes.filter(function(num){
    return num.flavor === "chocolate"
})


newTable.map(function(numbers){
    return numbers.status = "sold out!"
})

console.log(newTable);