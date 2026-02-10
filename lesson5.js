// Пример: Всплытие
// var text
// function sayHello () {}

// function multiplyTwoNumbers(num1, num2) {
//     console.log(num1 * num2)
// }

// multiplyTwoNumbers(5, 2)
// multiplyTwoNumbers(4, 5)


// Задание 4

// Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) -
// т.е. вывести числа 0, 1, 4, 9, 16...

// ** Задавать количество чисел, которые нужно вывести, при помощи функции prompt.



// Задание 7

// Переписать задание 4 в виде функции.
// Т.е. описать функцию, которая выводит квадраты
// чисел из заданного диапазона
// (диапазон будет попадать в функцию как аргументы - min и max).

// function printSquares(min, max) {
//     if (min > max) {
//         console.log('Ошибка: min не может быть больше max')
//     }
//     else if (min === max) {
//         console.log('Ошибка: min не может быть равен max')
//     }
//     else {
//         for (let i = min; i < max; i++) {
//             console.log(i ** 2)
//         }
//     }
// }


// // printSquares(0, 10)
// // printSquares(20, 40)
// printSquares(2, 2) // показать ошибку
// printSquares(10, 0) // показать ошибку


// СТРАННОСТИ ФУНКЦИИ

// 1
// HOISTING - ВСПЛЫТИЕ
// sayHello()

// function sayHello() {
//     console.log('Hello')
// }

// console.log(text)

// var text = 'Hi'



//2
// function sayHello() {
//     console.log('Hello')
// }

// var sayHello = 'Hi' // ошибки не будет - функция перепишется в переменную
// let sayHello = 'Hi' // ошибка

// sayHello()


//3
// function sayHello() {
//     console.log('Hello')
// }

// function sayHello() { // функция перезапишет верхнюю
//     console.log('Hi')
// }

// sayHello()


// ФУНКЦИЯ КАК ПЕРЕМЕННАЯ - анонимная функция или стрелочкая функция
// sayHello() // будет ошибка - нельзя получить доступ к переменной (функции) до его создания
// // P.S. Всплытию не подлежит

// const sayHello = function () { // анонимная функция
//     console.log('Hello')
// }


// const sayHello = () => {
//     console.log('Hello')
// }

// sayHello()


// RETURN - Вернуть или возвращать
// function divideTwoNumber(num1, num2) {
//     return num1 / num2
// }

// function increaseNumber(num1) {
//     console.log(num1 + 1)
// }

// console.log(divideTwoNumber(10, 2)) // console.log(5)

// let result = divideTwoNumber(20, 2)
// result++
// console.log(result)


// increaseNumber(result)



// Задание 8

// Написать функцию, которая возвращает строку - случайный цвет в формате rgb. 
// Это будет строка вида "rgb(10,55,250)"

// Здесь у вас будет две функции: одна ваша - getRandomRGB, 
// а вторая - функция получения случайного числа в диапазоне min - max.
//  Вот эта функция (просто скопируйте, она уже готова):

// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// Подсказки: 

// - Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 
// - Одна функция может вызывать другую функцию

// ИСПОЛЬЗУЙТЕ return!!!


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomRgb() {
    const r = getRandomInteger(0, 256)
    const g = getRandomInteger(0, 256)
    const b = getRandomInteger(0, 256)

    return `rgb(${r},${g},${b})`
}

setInterval(function () {
    const randomColor = generateRandomRgb()
    console.log(randomColor)
    document.body.style.backgroundColor = randomColor
}, 1000)
