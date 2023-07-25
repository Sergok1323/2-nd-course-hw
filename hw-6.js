/* Задание 1 */

const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++ ) {
    console.log(numbers[i]);
    if (numbers[i] == 10) break;
}

/* Задание 2 */

const numbers = [1, 5, 4, 10, 0, 3];

numbers.indexOf(4);

/* Задание 3 */

const numbers = [1, 3, 5, 10, 20];

numbers.join (' ');

/* Задание 4 */

const array = [];

for (let i=0; i < 3; i++) {
    array[i] = [];
        for ( let j=0; j < 3; j++) {
            array[i][j] = 1;
        }

}
console.log (array);

/* Задание 5 */

const array = [1, 1, 1];

array.push (2, 2, 2);
console.log (array);

/* Задание 6 */

const array = [9, 8, 7, 'a', 6, 5];

array.sort();
array.pop()
console.log (array);

/* Задание 7 */


const array = [9, 8, 7, 6, 5];
let a = Number(prompt('Введите любое число'));

for (let i = 0; i < array.length; i++) {
    if (array[i] == a) {
        alert ('Угадал');
        break;
    }
    else {
        alert ('Не угадал');
    }
}

/* Задание 8 */

let string = 'abcdef';
const arrayString = string.split('');
arrayString.reverse ();
arrayString.join ('');

/* Задание 9 */

const array = [[1, 2, 3,],[4, 5, 6]];

let newArray = [].concat(array[0], array[1]);

console.log (newArray);

/* Задание 10 */

const array = [4, 6, 9, 1, 7, 8, 3];

for ( let i = 0; i <= array.length; i++) {
    console.log (array [i]);
    console.log (array [i] + array [i+1]);
}

/* Задание 11 */

function numbSquare(arr) {
    return result = arr.map(item => item**2);
}
console.log(numbSquare([2, 3, 4, 5]));


/* Задание 12 */

function lenghtWords(arr) {
    return result = arr.map(item => item.length);
}
console.log(lenghtWords(['fdss', 'dfsfda', 'sdsf']));


/* Задание 13 */

function filterPositive(array) {
    return result = array.filter ( item => item >= 0);
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));