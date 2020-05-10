function fiveAndGreaterOnly(arr) {
    fiveAndGreater = arr.filter(function(number){
        return number >= 5
    })
    console.log(fiveAndGreater)
}

fiveAndGreaterOnly([3, 6, 8, 2]); 




function evensOnly(arr) {
    evenNums = arr.filter(function(num){
        if (num % 2 === 0){
            return num
        }
    })
    console.log(evenNums)
}


function fiveCharactersOrFewerOnly(arr) {
    smallWords = arr.filter(function(str){
        if (str.length <= 5){
            return str
        }
    })
    console.log(smallWords)
}



function peopleWhoBelongToTheIlluminati(arr){
    inDaClub = arr.filter(function(person){
        if (person.member){
            return person
        }
    })
    console.log (inDaClub)
}

peopleWhoBelongToTheIlluminati([
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
])



function ofAge(arr){
    oldEnough = arr.filter(function(person){
        if (person.age >= 18){
            return person
        }
    })
    console.log(oldEnough)
}

ofAge([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])



function doubleNumbers(arr){
    doubleNum =arr.map(function(double){
        console.log(double * 2)
    })
}



function stringItUp(arr){
    stringArr = arr.map(function(num){
        return num.toString()
    })
    console.log(stringArr)
}



function capitalizeNames(arr){
    properNames = arr.map(function(name){
        lowercase = name.toLowerCase()
        uppercase = lowercase[0].toUpperCase()
        proper =  uppercase + lowercase.substring(1,lowercase.length)
        return proper
    })
    console.log (properNames)
}

capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); 



function namesOnly(arr){
    namesOnly = arr.map(function(profile){
        return profile.name

    })
    console.log(namesOnly)
}

namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) 



function makeStrings(arr){
    matrixCheck = arr.map(function(profile){
        if (profile.age > 21){
            return profile.name + " can go to the Matrix!"
        } else {
            return profile.name + " is underage!"
        }

    })
    console.log(matrixCheck)
}

makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) 


function readyToPutInTheDOM(arr){
    domReady = arr.map(fuction(profile){
        if 
    })
}
readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) 
