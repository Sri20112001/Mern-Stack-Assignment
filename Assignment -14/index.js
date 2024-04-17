let myArray = [12, 2, 2, 4, 1];

function multiplyByTen(myArray) {

    return myArray * 10;
}

let ans = myArray.map(multiplyByTen);
console.log(myArray);
console.log(ans);
console.log();

let myArray2 = [12, 5, 7, 8, 3, 2];

let even = (num) => {
    return num % 2 === 0;
}

function filterEvenNumbers(myArray2) {
    return myArray2.filter(even);
}

let ans2 = filterEvenNumbers(myArray2);
console.log(myArray2);
console.log(ans2);

