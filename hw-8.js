
/* Задание 1 */
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 console.log(people.sort((a,b) => a.age > b.age ? 1:-1));

/************* Задание 2 *********************/

const people = [
  {name: 'Глеб', gender: 'male'},
  {name: 'Анна', gender: 'female'},
  {name: 'Олег', gender: 'male'},
  {name: 'Оксана', gender: 'female'}
];

function isPositive(element) {
    if (element > 0) {
      return true;
    } else {
      return false;
    }

  }
  function isMale(element) {
      if ((element.gender) === 'male') {
        return true;
      } else {
        return false;
      }    
  }
  
  function filter(array, ruleFunction) {
    const output =[];
    for (let i = 0; i < array.length; i++) {
      if (ruleFunction(array[i]) != false) {
        output.push(array[i]);
      }
    }
    return output;
    }
  
  console.log(filter([3, -4, 1, 9], isPositive));
  console.log(filter(people));


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





  /**************** ЗАДАНИЕ 5 ******************** */
  
  function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}


// Нужно изменить код ниже:

delayForSecond(() => sayHi('Глеб'));