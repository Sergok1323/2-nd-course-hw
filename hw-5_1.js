/* Функция для связи с Игра-1 */

function showQuestion() {
    confirm('Вы действительно хотите продолжить запуск игры?');
}

/* Функция для кнопки "Играть" */

function season() {
    let n = Number(prompt('Введите номер месяца'));
    if (Number.isInteger(n) && n == 1 || n == 2 || n == 12 ) {
        console.log('Зима');
    } else if (Number.isInteger(n) && n > 2 && n < 6) {
        console.log('Весна');
    } else if (Number.isInteger(n) && n > 5 && n < 9) {
        console.log('Лето');
    } else if (Number.isInteger(n) && n > 8 && n < 12) {
        console.log('Осень');
    } else {
        console.log('Вы ввели некорректное значение');
    }         
}