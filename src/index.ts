// Basic Types
let id: number = 5
let company: string = 'TCG'
let isPublished: boolean = true
let x: any = 'Hello'

x = true

// Declarations
let age: number

age = 24

// Array- declare with the type of elements in the array
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,true,"false"]

// Tuple
let person: [number, string, boolean] = [1,'Swaniket', true]

// Tuple Array
let employees: [number, string][]

employees = [
    [1, 'Swaniket'],
    [2, 'Rohan'],
    [3, 'Atmadhi']
]

// Union
let productId: string | number 
productId = '22'


// Enum - Enumerator
enum direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

// We can also use strings
enum direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

console.log(direction2.Left)

// Objects
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'Jhon'
} 

// More cleaner way
type User2 = {
    id: number,
    name: string
    age?: number // Optional Property
} 

const user2: User2 = {
    id: 1,
    name: 'Swaniket'
}

// Type Assertion- Expecitly tells the compiler that we want to treat an entity as different types
let cid: any = 1
// let customerId = <number>cid 
// OR
let customerId = cid as number

// Using types in function
function addNum(x: number, y: number): number {
    return x + y
}

// Functions with no return type
function log(message: string | number): void {
    console.log(message)
}


// Interfaces- We can't use interface with primitives or union. For that we need to use types
interface UserInterface {
    readonly id: number, // Defining a read-only property
    name: string,
    age?: number // Optional Property
} 

const user1: UserInterface = {
    id: 1,
    name: 'Swaniket'
}

// Using Interface with numbers
interface mathFunc {
    (x: number, y: number): number
}

const add: mathFunc = (x:number, y: number): number => x + y
const sub: mathFunc = (x:number, y: number): number => x - y

// Classes
interface PersonInterface {
    id: number,
    name: string,
    register(): string
} 

class people implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const swaniket = new people(1, 'Swaniket Chowdhury')
const atma = new people(1, 'Atmadhi Sarkar')

console.log(swaniket.register())

/*
3 Types of access specifiers- 
1. Public- used by default- you can access it from anywhere in the program
2. Private- only accessable within the class
3. Protected- Accessable through children of a class also
*/

class Employee extends people {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(1, "Arpan", "Jharudar")

// Generics- Used to build reusable components

// Here <T> is kind of a placeholder for the type
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Swaniket', 'Rohan', 'Arpan'])

// numArray.push('Swan')
// numArray.push(1)




