/* Задание 1 */

let string = "AbraKaADAbra";
 string = string.toUpperCase();
 alert(`${string}`);

 /* Задание 2 */ /* Не решено */

 function searchStart (arr, str) {
   const search = str;
   arr.forEach ((arr) => {
      if (arr.toLowerCase().startsWith(search.toLowerCase())) {
         console.log(arr);
      }
   });
   console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
 }


 /* Задание 3 */

 y = Math.floor(32.58884);
 console.log(y);

 z = Math.ceil(32.58884);
console.log(z);

 x = Math.round(32.58884);
 console.log(x);


 /* Задание 4 */

 a = Math.max(52, 53, 49, 77, 21, 32);
 b = Math.min(52, 53, 49, 77, 21, 32);
 console.log(b, a);

 /* Задание 5 */

function randomInt(minValue, maxValue) {
   return Math.round (Math.random() * maxValue);
}
console.log(randomInt(1,10));

/* Задание 6  */

function getRandomArrNumbers (n) {
   let arr = [];
   for (let i = 0; i < Math.floor(n/2); i++) {
      arr[i] = Math.round(Math.random()*n);
   }
   return arr;
}
console.log(getRandomArrNumbers(25));

/* Задание 7 */

function randomRange(a,b) {
   a = Math.round(a);
   b = Math.round(b);
   if (a > b) {
      c = Math.round ( Math.random() *a);
      return c;
   } else if (a < b) {
      c = Math.round ( Math.random() *b);
      return c;   
   } else {
      console.log('Невозможно получить диапазон');
   }
}

console.log(randomRange(3,15));

/* Задание 8 */

let currentDate = new Date();
console.log(currentDate);

/* Задание 9 */

const currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

/* Задание 10 */

function russianDate() {     
   const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
   const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
   let myDate = new Date();
   let fullDate = "Дата: " + myDate.getDate() +" " + months[myDate.getMonth()] +" " + myDate.getFullYear() + " - это " + days[myDate.getDay()];
   let time = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
   let DATE = { fullDate, 
               time, };
   console.log(DATE);
}
console.log(russianDate());

/* Задание 11 */
// Записано в отдельном файле hw-7_1.js



