
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

/* Задание 2 */

/* ********************************************************************

const arr =[];
const newArray = arr.map(filter(newArray, callback())) {
  function isPositive() {
    newArray.forEach(el) => {
      if ( el >= 0) {
        arr.unshift(el);
      }
      console.log (arr);
    }    
} 
}

function filter(array) {
  array.forEach((element) => {
    if (element >= 0) {
      newArray.push(element);
    }
  });
  console.log(newArray);
  }
  
console.log(filter([3, -4, 1, 9])); 


const newArray = [];
const people = [
  {name: 'Глеб', gender: 'male'},
  {name: 'Анна', gender: 'female'},
  {name: 'Олег', gender: 'male'},
  {name: 'Оксана', gender: 'female'}
];
 function filter() {
  people.forEach((element) => {
    if (element.gender === 'male') {
      newArray.push(element);
    }
    console.log(newArray);
  });
 }
 

 *******************************************/




 const newArray = [];
 const people = [
  {name: 'Глеб', gender: 'male'},
  {name: 'Анна', gender: 'female'},
  {name: 'Олег', gender: 'male'},
  {name: 'Оксана', gender: 'female'}
];

function isPositive(array) {
  array.forEach((element) => {
    if (element >= 0) {
      newArray.push(element);
    }
  });
  console.log(newArray);
  }
  function isMale(array) {
    array.forEach((element) => {
      if (element.gender === 'male') {
        newArray.push(element);
      }
      console.log(newArray);
    });
  }
  function filter(array, ruleFunction) {
    const output =[];
    for (let i = 0; i < array.length; i++) {
      output.push(ruleFunction(array[i]));
    }
    return output;
    }
  
  console.log(filter([3, -4, 1, 9], isPositive));
  console.log(filter(people));