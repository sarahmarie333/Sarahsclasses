function sum(num1, num2){
    return num1 + num2
}


var result = sum(10, 25) 
console.log(result);

function sum(num1, num2){
    return num1 + num2 
}


var result = sum(10, 25, 40) 
console.log(result)

function sum(num1, num2, num3){
    return num1 + num2 + num3
}

var result = sum(10) 
console.log(result);

function oddOrEven(sum){
    if(sum % 2 == 0)
        return "even";
    return "odd";
}
oddOrEven(sum);

var result = sum(34) 
console.log(result);

function myFunction(x, y) {
    if (sum > 20) {
      y = 0;
    }  
    return x * y;
  }