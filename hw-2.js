let a = 10;
alert (a);
a = 20;
alert (a);

let first = 2007;
alert (first);

let author = ('Brendan Eich');
alert ( author);

let x=10;
let y=2;
alert(x+y);
alert(x-y);
alert(x*y);
alert(x/y);

let result=2**5;
alert(result);

let a=9;
let b=2;
alert(9%2);


let num=1;
num += 5;
num -=3;
num *=7;
num /=3;
num ++;
num --;
alert (num);



let age = Number(prompt('Сколько вам лет?'));
alert(age);


let user = {name: "Ivan", age: 25, isAdmin: false,};
user.cityOfResidence = "Tula";

user.age = 31;

delete user.cityOfResidence;
let info = prompt("Какую информацию хотите узнать о пользователе?", "name");
alert(user{info});



let newName = String(prompt('Как вас зовут?'));
alert (`Привет, ${newName}`);
