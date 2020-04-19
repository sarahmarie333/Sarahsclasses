var test = 5;
if (test > 3){
    console.log(test + " is greater than 3");
}
var test = "cat";
var condition = 3;
if (test.length === condition){
    console.log(test + " is the length of " + condition);
}
var test = "cat";
var condition = "dog";
if (test === condition){
    console.log("They are the same!");
} else {
    console.log("not the same");
}
var person = {
    name: "Bobby",
    age: 12
}
if (person.age >= 18){
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie");
}

if (person.name[0] === "B"){
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie");
}
if (person.name[0] === "B" && person.age >= 18){
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie");
}
var test = 1;
var condition = "1";
if (test === condition){
    console.log ("strict");
} else if (test == condition){
    console.log ("loose")
} else {
    console.log ("Not equal at all")
}
if (1 <= 2 && 2 === 4){
    console.log("yes")
}
var test = "dog";
if (typeof(test) === "string"){
    console.log("var test: " + test + " is dog");
}
var test = "true";
if (typeof(test) === "boolean"){
    console.log("var test: " + test + " is boolean");
}
var test = 0;
if (typeof(test) !== "undefined"){
    console.log("Variable Defined");
} else {
    console.log("Undef");
}
var letter = 'g';
var number = 67;
if (letter.charCodeAt(0) < number){

    console.log("Letter is < number");
} else if (letter.charCodeAt(0) > number){

    console.log("Letter is > number");
} else {
    console.log("letter and number are equal!");
}
