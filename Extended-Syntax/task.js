'use strict'

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
   let x = [];
   let D = Math.pow(b, 2) - 4*a*c;



   if (D > 0) {
       x.push((-b + Math.sqrt(D)) / (2 * a));
       x.push((-b + Math.sqrt(D)) / (2 * a));
   }

   if (D === 0) {
        x.push((-b + Math.sqrt(D)) / (2 * a));
   }

    return x;  
    
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
//     let sumMark;
//     let averageMark;


//     if (marks.length > 5) {
//         console.log('Количество оценок больше 5, в расчет будут приняты только первые 5 оценок');
//         marks = marks.slice(0, 5);
//         for (let i = 0; i < marks.length; i++) {
//             sumMark = marks[i] + sumMark;
//         }
//         averageMark = sumMark / 5;
//     } else if (marks.length <= 5) {
//         for (let i = 0; i < marks.length; i++) {
//             sumMark = marks[i] + sumMark;
//         }
//          averageMark = sumMark / marks.length;
//     }
   
//     return averageMark;
// }
    
    let sumMark = 0;
    let averageMark = 0;


    if (marks.length > 5) {
        console.log('Количество оценок больше 5, в расчет будут приняты только первые 5 оценок');
        marks = marks.slice(0, 5);
        for (let i = 0; i < marks.length; i++) {
            sumMark = marks[i] + sumMark;
        }
        averageMark = sumMark / 5;
    } else if (marks.length <= 5) {
        for (let i = 0; i < marks.length; i++) {
            sumMark = marks[i] + sumMark;
        }
         averageMark = sumMark / marks.length;
    }
   
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let yearOfBirthday = dateOfBirthday.getFullYear();
    let now = new Date();
    now = now.getFullYear();
    let result = '';

    if ((now - yearOfBirthday) < 18) {
        result = 'Сожалею, ' + name + ', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!'
   } else {
        result = 'Не желаете ли олд-фэшн, ' + name + '?';
   }


    console.log(result)
    return result;
}