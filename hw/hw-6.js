// Задание 1
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); 
    if (arr[i] == 10) {
        break;
    }
  
}

// Задание 2
const arr2 = [1, 5, 4, 10, 0, 3];
let index = arr2.indexOf(4);
console.log(index);

// Задание 3
const arr3 = [1, 3, 5, 10, 20];
let join = arr3.join(' ');
console.log(join);

// Задание 4
const arr4 = [];

for (let i = 0; i < 3; i++) {
	arr4[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr4[i].push(1);
}
}

console.log(arr4);

// Задание 5
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

//  Задание 6
const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort().pop();
console.log(arr6);

//  Задание 7
// const arr7 = [9, 8, 7, 6, 5];
// let userAnswer = Number(prompt('Введите число от 0 до 10'));
// if (arr7.includes(userAnswer)) {
//     alert('Да, число есть');
    
// } else if (isNaN(userAnswer) || userAnswer < 0 || userAnswer > 10) {
//     alert('Пожаллуйста, введите число по условию');
// } else {
//     alert('Такого числа нет');
// }

//  Задание 8
let string = 'abcdef';
let result = string.split('').reverse().join('');
console.log(result);

// Задание 9
// const arr9 = [[1, 2, 3,],[4, 5, 6]];
// let oneArr = [].concat(arr9[0],arr9[1]); //нашла пример в интернете, можно ли так сделать?
// console.log(oneArr);



// Задание 10
const numbers = [5, 9, 7, 1, 10];

for (let i = 0; i < numbers.length - 1; i++) {

  let currentNumber = numbers[i]; // получили текущий элемент
  let nextNumber = numbers[i + 1]; // получили следующий элемент массива
  let sum = currentNumber + nextNumber; // сложили элементы

  console.log(`${currentNumber} + ${nextNumber} = ${sum}`);
}

// Задание 11
const arr11 = [1, 2, 3, 4, 5];

function squaredNumbers(arr11) {
    return arr11.map(el => el**2);
}

console.log(squaredNumbers(arr11));

// Задание 12
const arr12 = ['слово', '', 'слог', 'длинное предложение', 'буква'];

    const getLengthWords = str => str.map(word => word.length);

console.log(getLengthWords(arr12));

// Задание 13
let arr13 = [-1, 0, 5, -10, 56];
let arr14 = [-25, 25, 0, -1000, -2];

function filterPositive(arr) {
    let negativeValues = arr.filter(function(elem) {
        return elem < 0;
      });
      return negativeValues;
  }
  console.log(filterPositive(arr13));
  console.log(filterPositive(arr14));

