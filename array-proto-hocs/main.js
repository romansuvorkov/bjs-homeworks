function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

console.log(compareArrays([8, 1, 2], [8, 1, 2]));

const sum = (a, b) => a + b;

function memoize(sum, limit) {
  let memory = [];

  return function checksum( a, b ) {
      
    if (memory.some(argument => compareArrays(argument.arg, [a, b]))) {

      let resultinMemory = memory.filter(argument => compareArrays(argument.arg, [a, b]));
      resultinMemory = (resultinMemory[0].result);
      console.log(`Ответ найден в памяти = ${resultinMemory}`);
      return resultinMemory;
    }

    memory.push({arg: [a, b], result: a + b});

    if (memory.length > limit) {
      memory.splice(0, 1);
    }
    console.log(memory.length);
    console.log(`В памяти ответ не найден, ответ расчитан функцией sum = ${sum(a, b)}`);
    return sum( a, b );
  }

}

const mSum = memoize(sum, 3);


console.log(mSum(1, 9));
console.log(mSum(2, 8));
console.log(mSum(3, 7));
console.log(mSum(4, 6));
console.log(mSum(4, 6));

// function sumAll(...args) { 
//   let sum = 0;

//   for (let arg of args) sum += arg;

//   return sum;
// }
// console.log(sumAll(1, 1));
// console.log(sumAll(1, 1, 1));
// console.log(sumAll(1, 1, 1, 1));
// console.log(sumAll(1, 1, 1, 1, 1));


// function compareArrays(arr1, arr2) {
//   return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
// }

// console.log(compareArrays([8, 1, 2], [8, 1, 2]));

// function sum(...args) { 
//   let sum = 0;

//   for (let arg of args) sum += arg;

//   return sum;
// }

// function memoize(sum, limit) {
//   let memory = [];

//   return function checksum( sum ) {
//     console.log(sum);  
//     if (memory.some(argument => compareArrays(argument.arg, args))) {

//       let resultinMemory = memory.filter(argument => compareArrays(argument.arg, args));
//       resultinMemory = (resultinMemory[0].result);
//       console.log(`Ответ найден в памяти = ${memory}`);
//       return resultinMemory;
//     }
//     let argSum = 0;
//     for (let arg of args) argSum += arg;
//     console.log(argSum);
//     memory.push({arg: args, result: argSum});
//     console.log(memory);
//     console.log(limit);
//     if (memory.length > limit) {
//       memory.splice(0, 1);
//     }
//     console.log(`В памяти ответ не найден, ответ расчитан функцией sum = ${memory}`);
//     return sum( args );
//   }

// }

// const mSum = memoize(sum, 3);


// console.log(mSum(1, 9));
// console.log(mSum(2, 8));
// console.log(mSum(3, 7));
// console.log(mSum(4, 6));
// console.log(mSum(4, 6));

// function sumAll(...args) { 
//   let sum = 0;

//   for (let arg of args) sum += arg;

//   return sum;
// }
// console.log(sumAll(1, 1));
// console.log(sumAll(1, 1, 1));
// console.log(sumAll(1, 1, 1, 1));
// console.log(sumAll(1, 1, 1, 1, 1));