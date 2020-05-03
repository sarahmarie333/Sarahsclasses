var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

fruit.shift();
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

fruit.push(fruit.indexOf("orange"));
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

vegetables.push(vegetables.length);
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

var food = fruit.concat(vegetables);
console.log(food);

food.splice(4,2);
console.log(food);

food.reverse();
console.log(food);

var foodString = food.join(",");
console.log(foodString);