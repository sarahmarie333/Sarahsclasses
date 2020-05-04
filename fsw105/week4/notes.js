var readlineSync = require('readline-sync');

var op = readlineSync.question("Do an operation: add, sub, mul, div")

var num1 = readlineSync.question("Give me a number")
var num2 = readlineSync.question("Give me another number")

if(op == "add"){
	console.log( add(num1, num2) )
}

function add(a , b){
	a = parseInt(a)
	b = parseInt(b)
	return a + b
}


function startCalculator(){
	//whole calulator thing
	startCalculator()
}
