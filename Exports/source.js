//Export 1 source code

const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class someMathObj {
    constructor() {
        console.log("Object has been created")
    }
}

module.exports = {
    sum: sum,
    PI: PI,
    someMathObj: someMathObj
}