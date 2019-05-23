//Export 1 source code

const sum = (num1, num2) => num1 + num2; //This i=will mae a sum variable with 2 parameters which will be added together
const PI = 3.14; //this creates a variable which represents PI
class someMathObj {
    constructor() {
        console.log("Object has been created")
    }
} //This creates a constructor for an object

module.exports = {
    sum: sum,
    PI: PI,
    someMathObj: someMathObj
} //This shows how these variables are being exported 