"use strict";
let num = 5;
let company = "cartrabbit";
let isPublished = true;
// WE CAN ASSIGN ANY VALUE IN "any"
let x = "hello";
let ids = [1, 2, 3, 4, 5];
let arr = ["hello", 23, false];
// Tuple
let person = [12, "hello", true];
// Tuple Array
let employee;
employee = [
    [12, "Aravind"],
    [13, "Muthu"],
    [14, "Shashi"],
    [15, "Mayu"],
    [16, "Ragul"],
];
// Union
let pid = "22";
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 5] = "Down";
    Direction[Direction["Left"] = 6] = "Left";
    Direction[Direction["Rignt"] = 7] = "Rignt";
})(Direction || (Direction = {}));
const user = {
    id: 1,
    name: "aravind",
};
// type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    // console.log(message);
}
log(98);
const user1 = {
    id: 1,
    name: "aravind",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered successfully`;
    }
}
const brad = new Person(2, "Brad");
const todd = new Person(3, "Todd");
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "brad", "senior");
console.log(emp.register());
