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
