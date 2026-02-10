// Задание 5

// Напишите программу, которая выводит в консоль числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz»,
//  а вместо чисел, кратных пяти, — слово «Buzz». 
//  Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»

// for(let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz')
//     }
//     else if (i % 3 === 0) {
//         console.log('Fizz')
//     }
//     else if (i % 5 === 0) {
//         console.log('Buzz')
//     }
//     else {
//         console.log(i)
//     }
// }

// 15 / 3
// 15 / 5


// % => модуль чтобы проверить остаток

// 1 => console.log(1)
// 2 => console.log(2)
// 3 => console.log('Fizz')
// 4 => console.log(4)
// 5 => console.log('Buzz')
// ...
// 15 => console.log('FizzBuzz')
// ...


// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// WHILE - В ТО ВРЕМЯ КАК
// let i = 0

// while (i < 10) {
//     console.log(i) // 0
//     i++ // 0 => 0 + 1 = 1
// }

// while (true) {
//     console.log('Hello')
// }


// Задание 6

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//     alert(`number ${i}!`);
// }

// let i = 0

// while (i < 3) {
//     alert(`number ${i}!`);
//     i++
// }

// let i = 0
// while (i < 0) {
//     console.log(i)
// }

// for (let i = 0; i < 0; i++) {
//     console.log(i)
// }


// DO WHILE - сперва делает потом думает
// гарантирует хотя бы 1 срабатывание цикла (1 итерация)
// let i = 0
// do {
//     console.log(i)
// } while (i < 0)



// FUNCTION - ФУНКЦИИ
// function sayHello() {
//     console.log('Привет')
// }

// for (let i = 0; i < 20; i++) {
//     sayHello()
// } 


// ARGUMENTS (PARAMETERS) - АРГУМЕНТЫ (ПАРАМЕТРЫ) - Params, Args

// 1
// function sayHello(personName) { // personName = 'Нуршат'
//     if (personName === undefined) {
//         console.log(`Привет, Пользователь!`)
//     }
//     else {
//         console.log(`Привет, ${personName}!`)
//     }
// }


//2
// function sayHello(personName) { // personName = 'Нуршат'
//     if (!personName) { // проверяй null, undefined, 0, false, '', NaN
//        // нет personName-а
//        personName = 'Пользователь'
//     }
    
//     console.log(`Привет, ${personName}!`)
// }   

// 3
// function sayHello(personName) { // personName = 'Нуршат'
//     console.log(`Привет, ${personName ? personName : 'Пользователь'}!`)
// }   


// 4
// function sayHello(personName = 'Пользователь') { // personName = 'Нуршат'
//     console.log(`Привет, ${personName}!`)
// }

// sayHello('Нуршат')
// sayHello('Тимур')
// sayHello(20)
// sayHello(true)
// sayHello()

// Если параметр не задали (undefined) показать текст "Привет, Пользователь!"


// Задача
// Нужно создать функцию которая принимает 2 значения и выдает в консоль их сумму

// function sumTwoNumbers(num1, num2) {
//     if (arguments.length > 2) {
//         console.log('Че ты задаешь больше 2 аргументов???')
//     }
//     else if (arguments.length < 2) {
//         console.log('Некоторые параметры отсутсвуют')
//     }
//     else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         console.log('Невалидные аргументы')
//     }
//     else {
//         console.log(num1 + num2)
//     }
// }

// sumTwoNumbers(2, 2)
// sumTwoNumbers(5, 7)
// sumTwoNumbers('fds', true)
// sumTwoNumbers(2, true)
// sumTwoNumbers('fds', 2)
// sumTwoNumbers(2)
// sumTwoNumbers()
// sumTwoNumbers(5, 5, 5, 5)
// sumTwoNumbers(5, 5, 5)

// 1. Проверить аргументы функции на числа - typeof
// Если sumTwoNumbers('fds', true) => console.log('Невалидные аргументы')
// 2. Проверить переданы ли все аргументы
// Если sumTwoNumber() => console.log('Некоторые параметры отсутсвуют')
// Если sumTwoNumber(2) => console.log('Некоторые параметры отсутсвуют')
