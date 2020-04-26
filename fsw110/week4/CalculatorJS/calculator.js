var plus,minus,divide,multiply

function initialize(){
 plus=document.calc.operator.options[0]
 minus=document.calc.operator.options[1]
 divide=document.calc.operator.options[2]
 multiply=document.calc.operator.options[3]
}

function calculate(){
    a = parseInt(document.calc.val1.value)
    b = parseInt(document.calc.val2.value)
    if (plus.selected)
        document.calc.answer.value = a + b
    if (minus.selected)
        document.calc.answer.value = a - b
    if (divide.selected)
        document.calc.answer.value = a / b
    if (multiply.selected)
        document.calc.answer.value = a * b  
}