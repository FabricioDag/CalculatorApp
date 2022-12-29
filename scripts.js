numBtns = document.querySelectorAll(".number")
numCalc = document.getElementById("mainCalc")

var operation = 0 // 1==plus 2==minus 3==divide 4==multiply

var factorA = null
var factorB = null

numBtns.forEach(btn => {
    btn.addEventListener("click",(e)=>{
        number = (e.target.innerText)
        setNumbers(number)
    })
});

const setNumbers = (num) =>{
    prevNum = numCalc.innerText
    numCalc.innerText = prevNum + num
}

//upcoming improvements: do de math when the action buttons pressed twice

function sum(){
    factorA = numCalc.innerText
    numCalc.innerText = ""
    operation = 1
    console.log(factorA)
}

function minus(){
    factorA = numCalc.innerText
    numCalc.innerText = ""
    operation = 2
    console.log(factorA)
}

function divide(){
    factorA = numCalc.innerText
    numCalc.innerText = ""
    operation = 3
    console.log(factorA)
}

function multiply(){
    factorA = numCalc.innerText
    numCalc.innerText = ""
    operation = 4
    console.log(factorA)
}

function del(){
    actual = numCalc.innerText
    if(actual != ""){
        numCalc.innerText = actual.slice(0,-1)
    }else if(actual == "" && factorA!=null){
        numCalc.innerText = factorA
        factorA = null
        operation = 0
    }
}

function reset(){
    factorA = null
    factorB = null
    numCalc.innerText = ""
    console.log("factorA"+factorA)
    console.log("factorB"+factorB)
}

function equals(){
    if(factorA !=null){
        factorB = numCalc.innerText
        console.log(factorB)

        if(operation == 1){
            let result = parseFloat(factorA) + parseFloat(factorB)
            numCalc.innerText = result
        }
        else if(operation == 2){
            let result = parseFloat(factorA) - parseFloat(factorB)
            numCalc.innerText = result
        }

        else if(operation == 3){
            let result = parseFloat(factorA) / parseFloat(factorB)
            numCalc.innerText = result
        }
        else if(operation == 4){
            let result = parseFloat(factorA) * parseFloat(factorB)
            numCalc.innerText = result
        }
    }
    
}


