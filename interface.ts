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
