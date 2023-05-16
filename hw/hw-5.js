// // Задание 1 
// const numbers = (a, b) => {

//     if (a > b) {
//         return b;     
//     } else {
//         return a;
//     }
    
// }
// console.log(numbers(8, 4));
// console.log(numbers(6, 6));
// console.log(numbers(14, 21));


// // Задание 2
// let question = Number(prompt('Введите число'));

// const evenNumbers = (question) => question % 2 == 0 ? console.log('Число четное') : isNaN(question) ? console.log('Вы ввели не число') : console.log('Число нечетное');

// evenNumbers(question);

// // Задание 3
// // Задание 3.1
// const squareNumber = (number) => console.log(number**2);

// squareNumber(27);

// // Задание 3.2
// function returnSquareNumber(number) {
//     return number**2;
// }
// console.log(returnSquareNumber(22));

// // Задание 4
// let userAnswer = Number(prompt('Сколько вам лет?'));
// const age = (userAnswer) => isNaN(userAnswer) || userAnswer < 0 ? console.log('Вы ввели неправильное значение') : userAnswer >= 0 && userAnswer <= 12 ? console.log('Привет, друг!') : console.log('Добро пожаловать!');

// age(userAnswer);

// // Задание 5
// const correctNumbers = (a, b) => {
//     if (isNaN(a) || isNaN(b) ) {
//         return 'Одно или оба значения не являются числом';
        
//     } else {
//         return a * b;
//     }
// }
// console.log(correctNumbers(10, 3));
// console.log(correctNumbers(8, 'ffd'));
// console.log(correctNumbers(false, 'ffd'));
// console.log(correctNumbers('09d', 'ffd'));
// console.log(correctNumbers(22, 85));

// Задание 6

let userPrompt = Number(prompt('Введите число'));
function cube(userPrompt) {
    let cubeNumber = userPrompt**3;
    if (isNaN(userPrompt)) {
        return 'Переданный параметр не является числом'
        
    } else {
        return `${userPrompt} в кубе равняется ${cubeNumber}`;
    }   
}
console.log(cube(userPrompt));

// Задание 7

function getCirlceArea() {
    return this.radius** 2 * Math.PI;
}
function getCirlcePerimeter() {
    return this.radius * 2 * Math.PI;
}


const circle = {
    radius: 20,
    getArea: getCirlceArea,
    getPerimeter: getCirlcePerimeter,
}
const circle2 = {
    radius: 5,
    getArea: getCirlceArea,
    getPerimeter: getCirlcePerimeter,
}
console.log(circle.getArea());
console.log(circle.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());