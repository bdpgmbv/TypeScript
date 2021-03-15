// JavaScript File
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
  if(typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return +num1 + +num2;
  }
}

button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
});

// anything.value in JavaScript always gives a String. 

// Install typescript globally in your machine: npm install -g typescript

//TypeScript File
const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement; // ! => Required, field can never be null. "as HTMLInputElement" => Typecasting
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) { //num1: number => Adding types to variables 
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value)); // What we will get from the value property will be of type "string", We cant pass string here as we want number.
});

// compile it using "tsc practice.ts"
// Always import JS files because browser cant run TS => in the script tag in index.html
// Install extensions: ESlint, path Intellisense, Prettier-code formatter, tslint

// ***************************************************************************************************************************************************************//

// TypeScript helps before the code get compiled.
// To avoid any errors: give the type like => n1: number
// FILE: app.ts 
function add(n1: number, n2: number) {
  // console.log(typeof n1 !== 'number') => Regular JS code
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

// ***************************************************************************************************************************************************************//

// Variable Assignment:

let number1: number = 5; // or 
let number1 = 5; //Typescript does type inference

// Object Assignment => Its better to let typescript Infer the types of the key in Object 

// const person: {
//   name: string;
//   age: number;
// } = {
const person = { 
  name: 'Maximilian',
  age: 30
};

// or (But follow the above approach)
const person: object = { 
  name: 'Maximilian',
  age: 30
};

console.log(person.name);


// Array, Array of Strings Assignment and looping through
const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'] // String array
};

let favoriteActivities: string[];
favoriteActivities = ['Sports']; // String array

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR, because map works only on arrays and here we are applying it on string !!!
}


// Tuple Assignment

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple Assignment: => I want a special array with exactly 2 elements 
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

// person.role.push('admin'); => Push is an exception thats allowed on tuples, unfortunately typescript cant catch this error
// person.role[1] = 10; => ERROR
// If you have a scenario where you need exactly x amount of values in an array and you know the type of each value in advance, 
// then you might want to consider a tuple instead of an array to bring strightness into your app, to be even more clearer - the type of data you are working with and type of data you are expecting
