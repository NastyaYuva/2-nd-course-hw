// 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 console.log(people.sort((age1, age2) => age1.age - age2.age));


 //2 
 function isPositive(number) {
    return number > 0;
  }
  
  function isMale(person) {
    return person.gender === 'male';
  }
  
  function filter(arr, filterFunc) {
    return arr.filter(filterFunc)
  
  }
  
  console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
  
  const people2 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
  ];
  
  console.log(filter(people2, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'}, {name: 'Олег', gender: 'male'}]


//   //3
//   function printCurrentDate() {
//     const currentDate = new Date();
//     console.log(currentDate);
//   }
  
//   let counter = 0;
//   const intervalId = setInterval(function() {
//     printCurrentDate();
//     counter += 3;
  
//     if (counter >= 30) {
//       clearInterval(intervalId);
//       console.log("30 секунд прошло");
//     }
//   }, 3000);


//   //4
//   function delayForSecond(callback) {
//     setTimeout(callback, 1000);
//   }
  
//   delayForSecond(function () {
//     console.log('Привет, Глеб!');
//   });

  //5
  // Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда»,
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
      console.log('Прошла одна секунда');
      if (cb) {
        cb();
      }
    }, 1000);
  }
  
  // Функция sayHi выводит в консоль приветствие для указанного имени
  function sayHi(name) {
    console.log(`Привет, ${name}!`);
  }
  
  // Код выше менять нельзя
  
  // Нужно изменить код ниже:
  delayForSecond(() => {
    sayHi('Глеб');
  });