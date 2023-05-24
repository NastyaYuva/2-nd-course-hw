// Задание 1
let str = 'js';

let upperCase = str.toUpperCase();
console.log(upperCase);

// Задание 2
function searchStart(arr, str) {

    const newArray = [];

    arr.forEach((el) => {
        if (el.toLowerCase().includes(str.toLowerCase())) {
            newArray.push(el);
        }
});

return newArray;

}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));


// Задание 3
const number = 32.58884;

const roundedDown = Math.floor(number);
console.log(roundedDown);

const roundedUp = Math.ceil(number);
console.log(roundedUp);

const roundedNearest = Math.round(number);
console.log(roundedNearest);


// Задание 4
const numbers = [52, 53, 49, 77, 21, 32];

const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);

console.log('Наименьшее число:', minNumber);
console.log('Наибольшее число:', maxNumber);

// Задание 5
function getRandomInt(minValue, maxValue) {

return Math.round(Math.random() *  maxValue);
}

console.log(getRandomInt(0, 10));

// Задание 6
function getRandomArrNumbers(number) {
    const length = Math.floor(number / 2);
    const result = [];
  
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.round(Math.random() * number);
      result.push(randomNumber);
    }
    return result;
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

// Задание 7
function getRandomInt(minValue, maxValue) {     
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandomInt(5, 10));

// // Задание 8
// let currentDate = new Date();
// console.log(currentDate);

// Задание 9
// let currentDate = new Date(); // Текущая дата
// let futureDate = new Date(); // Дата через 73 дня

// futureDate.setDate(currentDate.getDate() + 73); // Устанавливаем будущую дату

// console.log(futureDate); // Выводим будущую дату

// Задание 10
function formatDateTime(date) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
  
    let formattedDate = date.toLocaleDateString('ru-RU', options);
    let formattedTime = date.toLocaleTimeString();
  
    return `Дата: ${formattedDate} - это ${formattedDate.split(',')[0]}.\nВремя: ${formattedTime}`; 
  };
let currentDate = new Date();
let forettedDate = formatDateTime(currentDate);
  console.log(forettedDate);

