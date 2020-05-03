const readline = require("readline-sync");

function add( num1, num2){
    
    return num1+ num2

}

console.log( add( 3, 4))

function subtract( num1, num2){
    
    return num1 - num2

}

console.log( subtract( 3, 4))

function multiply( num1, num2){
    return num1 * num2 
}
    
console.log ( multiply( 9, 5))

function divide( num1, num2){
    return num1 / num2 
}

console.log ( divide( 9, 1))

var op = readline.question("Do an operation: add, sub, mul, div")

var num1 = readline.question("Give me a number")
var num2 = readline.question("Give me another number")

if(op == "add"){
	console.log( add(num1, num2) )
}

function add(a , b){
	a = parseInt(a)
	b = parseInt(b)
	return a + b
}

if(op == "sub"){
	console.log( subtract(num1, num2) )
}

function subtract(a , b){
	a = parseInt(a)
	b = parseInt(b)
	return a - b
}

if(op == "mul"){
	console.log( multiply(num1, num2) )
}

function multiply(a , b){
	a = parseInt(a)
	b = parseInt(b)
	return a * b
}

if(op == "div"){
    console.log( divide(num1, num2) )
}

function divide(a , b){
	a = parseInt(a)
	b = parseInt(b)
	return a / b
}


function startCalculator(){
	//whole calulator thing
	startCalculator()
}