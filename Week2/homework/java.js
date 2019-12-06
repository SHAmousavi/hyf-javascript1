//1. Writing a console.log statement saying Hello World in all languages I know 

let persion = ("salam donya !");  //persion
let english =("Hello World !")   //english
let turkish = ("merhaba dunya !");  //turkish
let greek = ("gia su kosme !");  //greek

console.log(persion,english,turkish,greek)

//2. solving a SyntaxError console.log('I'm awesome');

console.log("I'm awesome");


//3. Declare a variable x and initialize it with an integer, using instructed steps

var x;
  console.log("the value of my variable x will be: undefined because it's not initialized");
  console.log(x);
 var x=5;
  console.log("the value of x will be: 5");
  console.log(x);


// 4. Declare a variable y and assign a string to it.

var y="This is String";
  console.log("the value of my string will be: This is a String");
  console.log(y);
var y="This is another string";
  console.log("the value of my string will be: This is another string");
  console.log(y);


//   5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?

var z = 7.25;
console.log(z);
var a=7;
console.log(a);
if (z > a) console.log('"z" has highest value');
else if (a) console.log('"a" has highest value');

// 6. Arrays!

var arr;
console.log("The value of array will be undefined.");
console.log(arr);
var favAnimals =["Cats","Dogs","Elephants"];
console.log(favAnimals);
favAnimals.push("Dan's Fav Animal baby pig");
console.log(favAnimals);

// 7. More strings

let myString = ["this,is,a,test"];
console.log(myString);
// 7.3 Find a way to get the length of myString.
console.log(myString.length);


// 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.

let foo = 3;
console.log("The value of my variable foo is: " + foo);
console.log(typeof foo);
let bar= 20.5;
console.log("The value of my variable bar is: " + bar);
console.log(typeof bar);
let fuBar = "Fucked Up Beyond All Recognition";
console.log("The value of my variable fubar is: " + fuBar);
console.log(typeof fuBar);
let $name = "Ashir";
console.log("The value of my variable $name is: " + $name);
console.log(typeof $name);

if (typeof foo== typeof fuBar){
    console.log("type of"+fuBar+ " is equal to type of "+foo)
}else {
    console.log("type of " + fuBar + " is not equal to type of " + foo);
};

if (typeof $name== typeof bar){
    console.log("type of"+$name+ " is equal to type of "+bar)
}else {
    console.log("type of " + $name + " is not equal to type of " + bar);
};

  

// 9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
var x =7
var x = x % 3;
console.log(x);

// 9.1 Add at least 3 console.log statements in which you show that you understand what % does.

var x=100;
var y=6;
console.log(x%y);

var x=56;
var y=8;
let r=(y%x)
console.log(r);

var x=894;
var y=32%x;
console.log(y);

// 10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.

var arr=["I","have","5","strings","and","2","numbers"];
console.log(arr);



var x = 6/0;
var y = 10/0;
if (x == y) console.log("equal");
else console.log("not equal");

