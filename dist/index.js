"use strict";
// Basic Types
let id = 5;
let company = 'TCG';
let isPublished = true;
let x = 'Hello';
x = true;
// Declarations
let age;
age = 24;
// Array- declare with the type of elements in the array
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "false"];
// Tuple
let person = [1, 'Swaniket', true];
// Tuple Array
let employees;
employees = [
    [1, 'Swaniket'],
    [2, 'Rohan'],
    [3, 'Atmadhi']
];
// Union
let productId;
productId = '22';
// Enum - Enumerator
var direction1;
(function (direction1) {
    direction1[direction1["Up"] = 1] = "Up";
    direction1[direction1["Down"] = 2] = "Down";
    direction1[direction1["Left"] = 3] = "Left";
    direction1[direction1["Right"] = 4] = "Right";
})(direction1 || (direction1 = {}));
// We can also use strings
var direction2;
(function (direction2) {
    direction2["Up"] = "UP";
    direction2["Down"] = "DOWN";
    direction2["Left"] = "LEFT";
    direction2["Right"] = "RIGHT";
})(direction2 || (direction2 = {}));
console.log(direction2.Left);
// Objects
const user = {
    id: 1,
    name: 'Jhon'
};
const user2 = {
    id: 1,
    name: 'Swaniket'
};
// Type Assertion- Expecitly tells the compiler that we want to treat an entity as different types
let cid = 1;
// let customerId = <number>cid 
// OR
let customerId = cid;
// Using types in function
function addNum(x, y) {
    return x + y;
}
// Functions with no return type
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Swaniket'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class people {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const swaniket = new people(1, 'Swaniket Chowdhury');
const atma = new people(1, 'Atmadhi Sarkar');
console.log(swaniket.register());
/*
3 Types of access specifiers-
1. Public- used by default- you can access it from anywhere in the program
2. Private- only accessable within the class
3. Protected- Accessable through children of a class also
*/
class Employee extends people {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, "Arpan", "Jharudar");
// Generics- Used to build reusable components
// Here <T> is kind of a placeholder for the type
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Swaniket', 'Rohan', 'Arpan']);
// numArray.push('Swan')
// numArray.push(1)
