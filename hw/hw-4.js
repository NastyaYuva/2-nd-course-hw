// Задание 1
for (let hello = 1; hello < 3; hello++) {
    console.log('Привет');
    
}

// Задание 2
for (let i = 1; i < 6; i++) {
    console.log(i);; 
}
// Задание 3
for (let a = 7; a < 23; a++) {
    console.log(a);;
    
}

// Задание 4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400

}
for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов.`);     
    }


// Задание 5
let n = 1000;
let num = 0; // итерация
while(n >= 50) {
    n /= 2;
    num++; 
}
console.log(`число: ${n}, количество итераций ${num}`);

// Задание 6
let firstFriday;
do { firstFriday = Number(prompt("Введите номер дня недели первой пятницы: "));
    
} while (isNaN(firstFriday) || firstFriday < 1 || firstFriday > 7); // пользователь вводит не число(строковое значение), или вводит число меньше 0, или число больше 7 - тогда продолжать запрашивать у него номер дня недели для отсчета первой пятницы

for (let day = firstFriday; day <= 31; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

