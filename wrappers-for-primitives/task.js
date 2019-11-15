'use strict';
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    percent = InputConvertToNumber( percent );

    contribution = InputConvertToNumber( contribution );  

    amount = InputConvertToNumber( amount );

    checkInputDataTypeForNumber( percent, contribution, amount );

    date = convertInputInDate( date );

    date = diffMonthBetweenDates(date);


    let creditSum = amount - contribution;

    let p = (percent / 100) / 12;

    let monthPayment = creditSum * ( p + p / (((1 + p)**date)-1) );

    let totalAmount = monthPayment * date;

    totalAmount = totalAmount.toFixed(2);
    totalAmount = Number(totalAmount);

    console.log(totalAmount);

    return totalAmount;
}

function InputConvertToNumber( a ) {

    a = Number(a);

    return a;
}

function convertInputInDate( a ) {
    
    a = new Date(a);

    return a;

}

function checkInputDataTypeForNumber( a, b, c ) {

    if ( typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || isNaN(a) == true || isNaN(b) == true || isNaN(c) == true) {
        alert('Ошибка ввода. Все вводимые значения должны быть числами');
    }
}

function diffMonthBetweenDates(date) {
    
let years = date.getFullYear();
let month = date.getMonth();
let nowDate = new Date();
let nowYears = nowDate.getFullYear();
let nowMonth = nowDate.getMonth();
date = (years - nowYears) * 12;
date = date - (nowMonth + 1);
date = date + month;
return date;

}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let greeting;

    console.log(typeof name);

    if ( typeof name == 'undefined' || name == null || name == '' ) {
        name = 'Аноним';        
    }
    
    
    greeting = (`Привет, мир! Меня зовут ${name}.`);
    console.log(greeting);
       
    return greeting;
}


