# TypeScript

* Open Command Prompt and type: sudo npm install -g typescript (To install TypeScript globally in your machine)
* Compile the TypeScript file: tsc app.ts

* typeof operator

* In TypeScript, you work with types like string or number all the times. Important: It is string and number (etc.), NOT String, Number etc. (The core primitive types in TypeScript are all lowercase!)

Core Types
1. NUMBER: 1, 5.3, -10 (All numbers, no differentiation between integers or floats)
2. STRING: 'Hi', "Hi", `Hi` (All text values)
3. BOOLEAN: true, false (just these two, no truthy or flasy values)
4. OBJECT: {age:30}
5. ARRAY: [1, 2, 3]
6. TUPLE: [1,2] (fixed length array, and fixed type)
7. ENUM: enum { NEW, OLD } (automatically enumerated global constant identifiers)
8. ANY; ( avoid as much as possible, it takes away all the advantages that typescript gives us)
9. UNION TYPES: input1: number | string | boolean

* eg: function add(n1: number, n2: number, showResult: boolean, phrase: string){ }
* let number1 = 5; (We dont have explicit type assignments here, because TypeScript has a built in feature called type inference. This means TypeScript does its best to understand which type you have in a certain variable or constant)
* let number1: number = 5 (Assigning the type here is not a good idea, not a good practice)
* let number 1: number; (Good practice)

* OBJECT : BETTER SYNTAX for object: const person = {name: 'abc', age: 100}, we can also use this declaration instead => const person: object; person = {name: 'abc', age: 100};

* ARRAY : if you want to use a mixed array - with type strings, numbers etc., declare it as => let favoriteActivities = any[];

* TUPLE : const person : { 
            role: [number, string]; (This marks a tuple type here)
           } = {
            role: [2, 'author']
           };
// Tuple tells javascript that i want a special array with exactly the number of elements and types that I specify.

* ENUM : enum Role { ADMIN, READ_ONLY, AUTHOR }; ( ACCESSING => Role.ADMIN )  (OR)  enum Role { ADMIN='ADMIN', READ_ONLY=100, AUTHOR='AUTHOR' };

* UNIONS : if we have some place in our application, be that a parameter of a function or a constant or a variable, where we accept two different kinds of values. Well then a union type can help us. to tell typescript we are fine with either a number or a string, we do use a "|" => 
```
function combine (input1 : number | string, input2: number | string) {
let result;
if(typeof input1 === 'number' && typeof input2 === 'number') result = input1 + input2;
else result = input1.toString() + input2.toString();
return result;
}
```
