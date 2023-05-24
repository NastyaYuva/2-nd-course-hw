function gameOne() {
        let numberSeasons = Number(prompt('Введите число месяца'));
        function seasons(numberSeasons) {
            if (numberSeasons <= 0 || numberSeasons > 12 ) {
                alert('Такого месяца не существует');   
            } else if (numberSeasons == 1 || numberSeasons == 2 || numberSeasons == 12) {
                alert('Зима');
            } else if (numberSeasons >= 3 && numberSeasons <= 5) {
                alert('Весна');
            } else if (numberSeasons >= 6 && numberSeasons <= 8) {
                alert('Лето');
            } else if (numberSeasons >= 9 && numberSeasons <= 11) {
                    alert('Осень');
                } else {
                    alert('Вы должны ввести число');
                }
            }
            seasons(numberSeasons);
            }

            
 function gameTwo() {
   let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
   let shuffle = arr.sort(() => Math.random() - 0.5);
   alert(shuffle.join(', '));

let userFirstAnswer = prompt('Чему равнялся первй элеимент массива?');
let userSecondAnswer = prompt('Чему равнялся послденый элеимент массива?');

if (userFirstAnswer.toLowerCase() === shuffle[0].toLowerCase() && userSecondAnswer.toLowerCase() === shuffle[shuffle.length - 1].toLowerCase()) {
    console.log('Поздравялем. Вы угадали!');
    
} else if (userFirstAnswer.toLowerCase() === shuffle[0].toLowerCase() || userSecondAnswer.toLowerCase() === shuffle[shuffle.length - 1].toLowerCase()) {
    console.log('Вы были близки к победе!');
 
} else {
    console.log('Вы ничего не запомнили, попробуйте еще раз');
}
 }      
