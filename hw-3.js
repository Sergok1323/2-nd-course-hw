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

let x = (prompt('Введите любое число'));
console.log(isNaN(x))

if (x%2 == 0){
      alert('Число четное');
} 
      else {
      alert('Число нечетное');
}






