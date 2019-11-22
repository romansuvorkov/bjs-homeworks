function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

console.log(compareArrays([8, 1, 2], [8, 1, 2]));

function memoize(fn, limit) {
    let result = [];
    console.log(result);
    console.log(fn);
    return fn;
}

const sum = (a, b) => a + b;
const mSum = memoize(sum, 3);

console.log(mSum(5, 3));