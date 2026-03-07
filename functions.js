// function declaration
// banner()
function banner() {
    console.log("Anshu here")
}

banner();               // function calling 
// add()
// function expression 

const add = function(a,b){          // a,b are parameters
    return a+b;
}

let sum = add(3,4)                 // 3,4 are arguments
console.log(sum)

// default parameters

function greet (name = 'Anshu'){
    console.log("hello "+ name)
}
greet()
greet("Raman")

// Rest parameters -  when we have no idea about arguments

function total(...num){
    return num.reduce((sums,n)=>sums+n, 0)

}


console.log(total(1,2,3,4,5))

//Functions Are First-Class Citizens
// In JS, functions can be:
// Stored in variables
// Passed as arguments
// Returned from other functions
// Assigned to object properties

function grt(){
    console.log("hello")
}

function execute(fn){
    fn()
}

execute(grt)

// callback functions

setTimeout(function(){
    console.log("Execute later")
}, 2000)

// Function Scope
// Variables inside functions are local

function demo(){
    let x = 0
}

// console.log(x)          // throw an error 

