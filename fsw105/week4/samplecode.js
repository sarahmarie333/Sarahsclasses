var readlineSync = require('readline-sync');

// console.log(readlineSync)

//Go into your folder in terminal
// type "npm init" and follow the instructions (or don't)
// type "y" at the end to say "yes" that the setting are correct
// type "npm install readline-sync" because you want to have access to that library
// give it a minute to download that library into the node_modules folder

var userName = readlineSync.question('May I have your name? ');

// readlineSync = {
// 	"question": fuction(arg){
// 		console.log(arg)
// 		//some magic to get an input
// 		return userPrompt
// 	}
// }

console.log("my name is " + userName)

// console.log(add(3,4))
// console.log(add(5,8))
// console.log(subtract(3,4))
// console.log(subtract(5,8))
// console.log(multiply(3,4))
// console.log(multiply(5,8))
// console.log(divide(3,4))
// console.log(divide(5,8))

var mathObj = {
	add: function ( n1, n2 ){
		num1 = parseInt(n1)
		num2 = parseInt(n2)
		return num1 + num2
	},
	subtract: function ( n1, n2 ){
		num1 = parseInt(n1)
		num2 = parseInt(n2)
		return num1 - num2
	},
	multiply: function multiply( n1, n2 ){
		num1 = parseInt(n1)
		num2 = parseInt(n2)
		return num1 * num2
	},
	divide: function divide( n1, n2 ){
		num1 = parseInt(n1)
		num2 = parseInt(n2)
		return num1 / num2
	}
}

var runProgram = true

while(runProgram){

	var operation = readlineSync.question("What operation do you want to do?");

	if(operation == "exit"){
		runProgram = false
		break;
	}

	var a = readlineSync.question("num1?")

	var b = readlineSync.question("num2?")

	var result = mathObj[operation](a, b)

	console.log(result)

	// switch(operation) {
	//   case "add":
	//     console.log(add(a, b))
	//     break;
	//   case "subtract":
	//     console.log(subtract(a, b))
	//     break;
	//   default:
	//     console.log("unreachable code")
	// }

	

}

function nameOfFunction(parameter, FOR, the, FUNCTION){
	//do the business
	//maybe return something
}


console.log("program over!")