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
}; //creating an object obstructor from the person database

let jimmy = new Person("jimmy");//defining jimmy st the person object
let josephene = new Person("Josephene");

josephene.on("name", ()=>{
    console.log("my name is" + josephene._name);
    
}); //usisng josephene as an event emmitter
jimmy.on("name", ()=>{
    console.log("my name is  " + jimmy._name);
}); //using jimmy as an event emmiter

jimmy.emit("name"); //emmiting "name"
