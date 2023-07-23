/* Задание 1 */

let compare = (a, b) => {
    if (a >= b) {
        return a;
    } else {
        return b;
    }
}

console.log(compare(8, 4));


/* Задание 2 */

let parity = (c,) => {
    if (c % 2 == 0) {
        console.log ('Число четное');
    } else {
        console.log ('Число нечетное');
    }
}

console.log(parity(9));
console.log(parity(10));

/* Задание 3.1 */

let exponent = (x,) => {
    console.log (x**2);
}
console.log (exponent(4));

/* Задание 3.2 */

let exponent = (x,) => {
    let result = x**2;
    return result;
}

console.log (exponent(5));


/* Задание 4 */

function year() {
    let answer = Number(prompt('Сколько Вам лет?'));
    if (answer < 0 || isNaN ) {
        console.log('Вы ввели неправильное значение');
    } else if (answer >= 0 && answer <= 12) {
        console.log ('Привет, друг!');
    } else {
        console.log ('Добро пожаловать!');
    }
}
console.log (year());

/* Задание 5 */

let check = (a, b) => {
    if ( isNaN(a) || isNaN(b) ) {
        console.log ('Одно или оба значения не являются числом');
    } else {
        return a*b;
    }
}

console.log (check(5,7));
console.log (check("ds",7));
console.log (check(5,"sd"));
console.log (check("sdv","dd"));
console.log (check("",7));

/* Задание 6 */

function check() {
    let n = prompt('Введите любое число');
    if (isNaN(n)) {
        console.log ('Переданный параметр не является числом');
    } else {
        let result = n**3;
        console.log (`n в кубе равняется ${result}`);
    }
}

console.log (check());

/* Задание 7 */

const circle1 = {
    radius: 5,
    getArea: function() {
        square = 3.14*(this.radius**2);
        return square;
    },
    getPerimeter: function() {
        perimeter = 2*3.14*this.radius;
        return perimeter;
    }
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());


const circle2 = {
    radius: 3,
    getArea: function() {
        square = 3.14*(this.radius**2);
        return square;
    },
    getPerimeter: function() {
        perimeter = 2*3.14*this.radius;
        return perimeter;
    }
}
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
