// if..else statement

const myNumber = 0;
        if (myNumber == 0) {
        console.log("Success, ", myNumber);
        }  else {
        console.log("Fail, ", myNumber);
    }

// Global scope

let globalVar = "I'm global!";

function doSomething() {
  console.log(globalVar); //accessible inside the function
}

doSomething();
console.log(globalVar); //accessible outside the function
// Local/Function Scope

function doSomethingElse() {
  let localVar = "I'm local";
  console.log(localVar); //accessible inside the function
}

doSomethingElse();
console.log(localVar); // Error - localVar isn't defined globally