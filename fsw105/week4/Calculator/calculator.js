var readlineSync = require('readline-sync');
function addTwoNumbers(num1,num2){
    var sum = num1 + num2;
    console.log("the result is", sum)
}
function timesTwoNumbers(num1,num2){
    var multiply = num1 * num2;
    console.log("the result is", multiply)
}
function divideTwoNumbers(num1,num2){
    var divide = num1 / num2;
    console.log("the result is", divide)
}
function subtractTwoNumbers(num1,num2){
    var substract = num1 - num2;
    console.log("the result is", substract)
}
var num1 = readlineSync.questionInt('May I have your first number? ');
console.log(num1);
var num2 = readlineSync.questionInt("May i have your second number? ");
console.log(num2)
var chooseWhatYouWant = readlineSync.question("what would you like to do here?/ add, sub, mult, div? ")
if(chooseWhatYouWant === "add"){
    addTwoNumbers(num1,num2)
}else if(chooseWhatYouWant === "mult"){
    timesTwoNumbers(num1,num2)
}else if(chooseWhatYouWant === "div"){
    divideTwoNumbers(num1,num2)
}else(chooseWhatYouWant === "sub")
    subtractTwoNumbers(num1,num2)
