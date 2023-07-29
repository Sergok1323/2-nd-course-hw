/* Функция для игры "Запомни слова" */

function rememberWords() {
    const words = ['Яблоко','Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    result = words.sort();
    alert(result);
   const firstAnswer = prompt("Чему равнялся первый элемент массива?");
   const secondAnswer = prompt("Чему равнялся последний элемент массива?");
    if (firstAnswer.toLowerCase() === result[0].toLowerCase() && secondAnswer.toLowerCase() === result[result.length -1].toLowerCase() ) {
        alert('Поздравляем!!! Вы победили!!!')
    } else if (firstAnswer.toLowerCase() === result[0].toLowerCase() || secondAnswer.toLowerCase() === result[result.length -1].toLowerCase()){
        alert ('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно');
    }    
}
