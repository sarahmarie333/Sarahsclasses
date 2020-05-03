var box = document.querySelector(".box");
console.log(box);

box.addEventListener("mouseover", function(e){
    e.target.style.backgroundColor = "blue"

})

box.addEventListener("mouseout", function(e){
    e.target.style.backgroundColor = "white"

})

box.addEventListener("mousedown", function(e){
    e.target.style.backgroundColor = "red"
})

box.addEventListener("mouseup", function(e){
    e.target.style.backgroundColor = "yellow"
})

box.addEventListener("dblclick", function(e){
    e.target.style.backgroundColor = "green"

})

box.addEventListener("wheel", function(e){
    e.target.style.backgroundColor = "orange"
})

document.addEventListener("keydown", function(e){

    if (e.keyCode == 82){
        box.style.backgroundColor = "red"
    }
    if (e.keyCode == 71){
        box.style.backgroundColor = "green"
    }
    if (e.keyCode == 66){
        box.style.backgroundColor = "blue"
    }

})