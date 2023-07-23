// Задание 1
const password = 'Moscow23';
let keyword = String(prompt('Введите пароль'));
if (password == keyword) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неверно');
}



// Задание 2
const c = 5;

if (c>0 && c<10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


// Задание 3
const d = 75;
const e = 115;

if (d>100 || e>100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


// Задание 4
let a = '2';
let b = '3';

alert (Number(a) + Number(b));

// Задание 5

let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Зима');
        break;
    case 12:
        console.log('Зима');
        break;
    case 3:
        console.log('Весна');
        break;
    case 4:
        console.log('Весна');
        break;
    case 5:
        console.log('Весна');
        break;
    case 6:
        console.log('Лето');
        break;
    case 7:
        console.log('Лето');
        break;
    case 8:
        console.log('Лето');
        break;
    case 9:
        console.log('Осень');
        break;
    case 10:
        console.log('Осень');
        break;
    case 11:
        console.log('Осень');
        break;    

    default: console.log('Недопустимое значение');
        break;
}

// Задание 7

let x = Number(prompt('Введите любое число'));
console.log(isNaN(x))

if (!isNaN(x) && x % 2 === 0){
      alert('Число четное');
} else if (!isNaN(x)) {
      alert('Число нечетное');
}


// Задание 8

let clientOS = Number(prompt('Введите 0 (для ios) или 1 (для android'));

if (clientOS != 0 && clientOS != 1) {
    console.log ('Неккоректный ввод');
} else if (clientOS ==0) {
    console.log ('Установите версию приложения для iOS по ссылке');
} 
  else {
    console.log ('Установите версию приложения для Android по ссылке');
}


// Задание 9

let clientOS = Number(prompt('Введите 0 (для ios) или 1 (для android'));
let clientDeviceYear = Number(prompt('Введите год выпуска вашего телефона'));

if (clientOS != 0 && clientOS != 1 || clientDeviceYear > 2023) {
    console.log ('Неккоректный ввод');
} else if (clientOS ==0 && clientDeviceYear >=2015) {
    console.log ('Установите версию приложения для iOS по ссылке');
} 
  else if (clientOS ==0 && clientDeviceYear <2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке')
  }

  else if (clientOS ==1 && clientDeviceYear >=2015) {
    console.log ('Установите версию приложения для Android по ссылке');
}
  else if (clientOS ==1 && clientDeviceYear <2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
  }





