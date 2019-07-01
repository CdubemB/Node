// JavaScript source code

const EventEmmiter = require("events"); //gets the event emmiter from the events module
const eventEmmiter = new EventEmmiter(); //defines veriable as event emmiter object

eventEmmiter.on("source", function (num1, num2) {
    console.log(num1 + num2);
}); //first example of use of an emmiter

eventEmmiter.emit("source", 7, 16); //emmiting something

class Person extends EventEmmiter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}; //creating an object

let jimmy = new Person("jimmy");//defining jimmy st the person object

jimmy.on("name", function () {
    console.log("my name is" + jimmy._name);
}); //using jimmy as an event emmiter

pedro.emit("name"); //emmiting "name"
