let num: number = 5;
let company: string = "cartrabbit";
let isPublished: boolean = true;

// WE CAN ASSIGN ANY VALUE IN "any"
let x: any = "hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = ["hello", 23, false];

// Tuple
let person: [number, string, boolean] = [12, "hello", true];
// Tuple Array
let employee: [number, string][];

employee = [
  [12, "Aravind"],
  [13, "Muthu"],
  [14, "Shashi"],
  [15, "Mayu"],
  [16, "Ragul"],
];

// Union
let pid: string | number = "22";

// Enum
enum Direction {
  Up,
  Down = 5,
  Left,
  Rignt,
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "aravind",
};

// type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// Void
function log(message: string | number): void {
  // console.log(message);
}
log(98);

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "aravind",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is registered successfully`;
  }
}

const brad = new Person(2, "Brad");
const todd = new Person(3, "Todd");

// Subclass
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "brad", "senior");

// console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["a", "b", "c"]);
