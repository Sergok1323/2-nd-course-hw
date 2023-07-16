// Задание 1
let i = 1;
while (i<=2) {
    console.log('Привет');
    i++;
}

// Задание 2

let i=1;
while (i<=5) {
    console.log(i);
    i++;
}

// Задание 3

let i=6;
do {
    i++;
    console.log(i);
} while (i<22)

// Задание 4  (Вроде исходное как в примере на уроке ( про capital и country), но не получилось)

let worker = { Коля: 200, Вася: 300, Петя: 400, };
for (let name in worker) {
    console.log('${name}  зарплата ${worker[name]} долларов');
}

// Задание 5

let n = 1000;
let num=0;
let result = 0;

do {
    result = n/2;
    n=result;
    num++;
} while (result>=50)
console.log(num);
console.log(n);

// Задание 6 (Почему не выводится значение переменной реализованной через ${}?)

for (let numberFriday = 4; numberFriday <=31; numberFriday++) {
    if (numberFriday == 4 || numberFriday == 11 || numberFriday ==18 || numberFriday == 25) {
        console.log ('Сегодня ${numberFriday}-е число. Необходимо подготовить отчет');
    }
    
}


