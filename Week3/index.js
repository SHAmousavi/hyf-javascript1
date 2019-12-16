//strings!
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
myString = myString.replace(/,/g," ");
console.log(myString);
//Arrays
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals)
favoriteAnimals.splice(1, 0, "meerkat");
console.log(favoriteAnimals);
console.log('The array has a length of: ' + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
// Now if unlike Jim, you don't like *'meerkat'* and you want to delete it from the array,but you don't know the position or the `index` of the item in the array, how can you find it? :
const index = favoriteAnimals.indexOf('meerkat');
console.log('The item you are looking for is at index: ' + index );
console.log(favoriteAnimals);
//## More JavaScript :tada:

// 1. Create a function that takes 3 arguments and returns the sum of the three arguments. :
function sum(val1, val2, val3) {
    var result = val1 + val2 + val3;
    return result;
  }
  //   2 Create a function named colorCar that receives a color, and prints out, "a red car" :
  function colorCar(color) {
    var result = color;
    return " a " + result + " car";
  }
  var col = colorCar("red");
console.log(col);

// Create an object and a function that takes the object as a parameter and prints out all of its names and values.

var drinks = {
    obje1: "water",
  
    obje2: "milk",
  
    obje3: "juice",
  
    obje4: "coffee"
  };
  function showMe(obje) {
    for (i in obje) {
      console.log(obje[i]);
    }
  }
  var showobj = showMe(drinks);
 //reate a function named vehicleType :
 function vehicleType(color, code){
    if (code === 1) {
        console.log(color + " car");
      } else if (code === 2) {
        console.log(color + " motorbike");
      }
    vehicleType("blue", 2);
 }
 // write the following without the `if` statement, but with just as a single line :
 console.log([3 === 3], "true" || "false");
 //Create a function
 function vehicle(color, code, age){
    if (code == 1 && age == 5) {
        console.log("a " + color + " car used");
      }
    
    }
    vehicle("blue", 1, 5);
 // 7 Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more :
 let vehicles = ["motorbike", "caravan", "bike", "mashin", "car"];
 let arr = vehicles[2] ;
 console.log(arr);

 // 9 Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new caravan".

function vehicle(color, code, age) {
    if (code == 3 && age == 1) {
      console.log("a" + " " + color + " " + "new caravan");
    }
  }
  vehicle("green", 3, 1);

  //10 Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
var vehicless = ["motorbikes", "caravans", "bikes"];
function advertise(arguments) {
  for (var i = 0; i < arguments.length; i++) {
    console.log(
      "Amazing Joe's Garage, we service cars, " +
        arguments[i] +
        ", " +
        arguments[i + 1] +
        " and " +
        arguments[i + 2] +
        "."
    );
    break;
  }
}
advertise(vehicles);
// What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
vehicles.push("buses");
// mentors name
let mentors = [
    { name:"Zohair", languages:"HTML-CSS" },
    { name: "Abed", languages: "HTML-CSS" },
    { name: "Vadim", languages: "JavaScript" },
  ];
  
console.log(
    "Mentor's name:" +
      mentors[0].name +
      " " +
      "languages" +
      " " +
      mentors[1].languages
  );
  let len = mentors.length;
  for (let index = 0; index < len; index++) {
    console.log(mentors[index]);
  }
  let x = [1,2,3];
  let y = [1,2,3];
  let z = y;
  console.log([x == y], "true" || "false" );
  console.log([x === y], "true" || "false" );
 // 16 :
 let o1 = { foo: 'bar' };
 let o2 = { foo: 'bar' };
 let o3 = o2;
 //let o2 = o3; : dosent matter
 // 17 
let bar = 42;
typeof typeof bar;
console.log(typeof bar); // Number
console.log(typeof typeof bar); //String

