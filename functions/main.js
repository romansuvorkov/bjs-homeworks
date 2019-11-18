//*******************Задача 1**********************************************
function getSolutions( a, b, c ) {
    let D = Math.pow(b, 2) - 4*a*c;
    let output = {};
    if ( D < 0) {
    output.D = D;
    } else if ( D === 0 ) {
        let x1 = -b / (2 * a);
        output.roots = [x1];
        output.D = D;
    } else {
        let x1 = ( -b + Math.sqrt(D) ) / (2 * a);
        let x2 = ( -b - Math.sqrt(D) ) / (2 * a);
        output.roots = [x1, x2];
        output.D = D;
    }

    return output;
}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log( `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}` );
    console.log( `Значение дискриминанта: ${result.D}` );
    if ( result.D < 0) {
        console.log( 'Уравнение не имеет вещественных корней' ); 
    } else if (result.D === 0) {
        console.log( `Уравнение имеет один корень X₁ = ${result.roots}` );
    } else {
        console.log( `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}` );
    }

}

showSolutionsMessage( 2, 4, 2 );


// *******************Задача 2**********************************************

function getAverageScore( data ) {

    let output = {};
    let subjectSum = 0;
    for ( let subject in data ) {
        data[subject] = getAverageSubjectScore(data[subject]);
    }
    
    subjuctNumb = 0;
    subjectSum = 0;
    for ( let subject in data ) {
        subjuctNumb++;
        subjectSum = data[subject] + subjectSum;
    }
    let average = subjectSum / subjuctNumb;
    data.average = average;
    return data;
}

function getAverageSubjectScore(arr) {
    let subjectSum = 0;
    for (let i = 0; i < arr.length; i++) {
        subjectSum = arr[i] + subjectSum;
    }
    let averageSubjectScore = subjectSum / arr.length;
    return averageSubjectScore;
}
    
console.log(getAverageScore({
algebra: [ 2, 4, 5, 2, 3, 4 ],
geometry: [ 2, 4, 5 ],
russian: [ 3, 3, 4, 5 ],
physics: [ 5, 5] ,
music: [ 2, 2, 6 ],
english: [ 4, 4, 3 ],
poetry: [ 5, 3, 4 ],
chemistry: [ 2 ],
french: [ 4, 4 ]
}));

// *******************Задача 3**********************************************

function getPersonData( secretData ) {
    let output = {};

    for (let subj in secretData) {
        lastFirstName = checkNames(subj);
        name = checkListName(secretData[subj])
        output[lastFirstName] = name;
    }

    console.log ( output )
    return output;
}

function checkListName(numb) {
    if (numb === 0) {
        numb = 'Родриго';
    } else if (numb === 1) {
        numb = 'Эмильо';
    }
    // console.log( numb );
    return numb;
}

function checkNames(text) {
    if (text === 'aaa') {
        text = 'firstName';
    } else if (text === 'bbb') {
        text = 'lastName';
    }
    // console.log( text );
    return text;
}


getPersonData({
    aaa: 1,
    bbb: 1
});












