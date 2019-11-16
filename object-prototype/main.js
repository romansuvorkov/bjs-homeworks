function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
    now = Date.now();
    birthday = convertInputInDate( birthday );
    birthday = new Date(birthday);
    let diff = now - birthday;
    let age = diff / 31556952000;
    return age >= 18;
    
}

function convertInputInDate( a ) {
    
    a = new Date(a);

    return a;

}


function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };
    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
    let sound;
    if (animal == undefined) {
        sound = null;
    } else {
        sound = animal.sound;
    }
    return sound;
}




function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь

    let sumMark = 0;
    for (let i = 0; i < marks.length; i++) {
        marks[i] = InputConvertToNumber( marks[i] );
        sumMark = marks[i] + sumMark;
    }

    let average = sumMark / marks.length;
    roundedAverage = Math.round(average);
   
    return roundedAverage;

}

function InputConvertToNumber( a ) {
    a = Number(a);
    return a;
}