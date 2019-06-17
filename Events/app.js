// JavaScript source code

const EventEmmiter = require("events"); 
const eventEmmiter = new EventEmmiter();

eventEmmiter.on("source", function (num1, num2) {
    console.log(num1 + num2);
});

eventEmmiter.emit("source", 7, 16);

class Person extends EventEmmiter {
    constructor(name) {
        super();
        this.name = name;
    }

    get name() {
        return this.name;
    }
}

let jimmy = new Person("jimmy");

jimmy.on("name", function () {
    console.log("my name is" + jimmy.name);
});

pedro.emit("name");
