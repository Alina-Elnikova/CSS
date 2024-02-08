let num = 42;
let firstName = 'Alina'
const isProgrammer = true

//isProgrammer = false //error because of const

/*
//Can do
let $ = 'test'
let $num = 42
let num$ - 42
let _ = 49
let _num = 12
let num_ = 12
Let first_name = 'Alina'  //bad
let myNum = 34  //good
let num42 = 10

//Restricted
let 42num = '11'
let my-num = 1
let false, let, const
 */

//alert(firstName)
//console.log('Test: 'firstName)

/*console.log(num + 10)
console.log(num - 10)
console.log(num * 10)
console.log(num / 10)
console.log(num)*/

/*let num2 = num + 10
console.log(num , num2)
num = num2 - num
console.log(num , num2)*/

/*let num3 = (num + 10 * 2) / (5 -1)
console.log(num3)*/

//const fullName = firstName + ' Elnikova'
//console.log(fullName)

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

console.log(input2.value)
//console.log(resultElement.textContent)
//resultElement.textContent = 42

const result = Number(input1.value) + Number(input2.value)
resultElement.textContent = result

//console.log(typeof sum)

plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}

del.onclick = function() {
    action = '/'
}

um.onclick = function() {
    action = '*'
}


function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
     } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
 }

 function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    //if (actionSymbol == '+') {
    //    return num1 + num2
    //} else if (actionSymbol == '-') {
    //    return num1 - num2

    if (actionSymbol == '/') {
        return num1 / num2
    } else if (actionSymbol == '*') {
        return num1 * num2
    }
    
    return actionSymbol == '+' ? num1 + num2 : num1 -  num2
    
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
}

 /*if(action == '+') {
    const sum = Number(input1.value) + Number(input2.value)
    printResult(sum)
 } else if (action == '-') {
    const sum = Number(input1.value) - Number(input2.value)
    printResult(sum)
 }
}*/
