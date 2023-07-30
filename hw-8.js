
/* Задание 1 */
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 console.log(people.sort((a,b) => a.age > b.age ? 1:-1));

/* Задание 2 */


/* Задание 3 */

const timer = (deadline) => {

    const interval = setInterval(() => {
        let currentDate = new Date();
        console.log(currentDate);
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло');
    }, deadline * 1000);
};
timer(30);

/* Задание 4 */

function delayForSecond() {
  setTimeout(() => {
    console.log('Привет, Глеб!');
}, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

/* Задание 5 */




