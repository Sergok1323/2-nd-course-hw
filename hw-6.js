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