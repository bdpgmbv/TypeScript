interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
};

user1.greet('Hi there - I am');

// ************************************************************************************************************************************************************** //

interface Person {
  readonly name: string;
  age: number;

  greet(phrase: string): void;
}

// or

type Person {
  readonly name: string;
  age: number;

  greet(phrase: string): void;
}

// ************************************************************************************************************************************************************** //

// You can create function types with interfaces.

interface AddFn { // TypeScript understands you want to use this interface as the function type and this is how the function should look like.
  (a: number, b: number): number;
} 

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

// ************************************************************************************************************************************************************** //

// OPTIONAL property

interface Named {
  readonly name: string;
  outputName?: string; // this "?" tells TS this property might exist in class that implement this interface, but it does'nt have to. you can also mark methods as optional => "myMethod?(){...}"
}

// ************************************************************************************************************************************************************** //
// Intersection Types 

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // In case of Object types, its a combination of object properties 

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // In the end "Universal" is just number => In case of UNION tyoe its just the common among both (Intersection of both of these). 

// interface ElevatedEmployee extends Employee, Admin {} // This can same be done with interfaces 

// ************************************************************************************************************************************************************** //
// Type Guards => term that describes the idea or approach of checking if a certain property or method exists before you try to use it or you can do something with the type before you try to use it
// for objects that can be done with "instance of" or with "in", for other types we can use "typeof"

// Type 1
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}
printEmployeeInformation({ name: 'Manu', startDate: new Date() });

// Type 2
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

// Type 3 with classes
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// ************************************************************************************************************************************************************** //
// Type Guards- discriminated Unions- with Interfaces 

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

// ************************************************************************************************************************************************************** //
// Type Casting

// index.html
<body>
  <input type="text" id="user-input">
</body>

// "!" tells it will never yield null
const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // this => "as HTMLInputElement" tells TS that expresion in front of it will yield a value of type HTMLInputElement 
userInputElement.value = 'Hi there!';

// You can use the below if you can expect null values
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}

// ************************************************************************************************************************************************************** //
// 
