// Нужно создать проверку является ли человек подростком (13 - 19)

// const userAnswer = prompt('Введите ваш возраст:')
// const userNumber = Number(userAnswer)


// // 15 >= 13 && 15 <= 19 = true && true = true
// // 22 >= 13 && 22 <= 19 = true && false = false


// //'fidanfijdsbfkdbsjkfsd' - true || true || true = true
// // -20 - false || true || false = true

// // Рекомендация: сперва всегда проверяйте ошибки
// if (isNaN(userNumber) || userNumber < 0 || userNumber > 150) {
//     console.log('Данные не корректны!')
// }
// else if (userNumber >= 13 && userNumber <= 19) { // 12 >= 13 = false
//     // Если вы проверяете любой интервал чисел (Пример: от X до Y)
//     // Используйте оператор &&
//     console.log('Вы подросток!')
// }
// else if (userNumber < 13) {
//     console.log('Вы ребенок!')
// }
// else if (userNumber > 19) {
//     console.log('Вы взрослый!')
// }
// else {
//     console.log('Вы не подросток!')
// }

// Нужно сделать дополнительные проверки: 
// узнать является ли человек ребенком или взрослым
// до 13 - ребенок, от 19 - взрослый
// Подсказка: else if



// Задание 5

// Создать переменную и присвоить ей число.
// Записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

// num = num * 10
// num *= 10

// let number = 12

// // console.log(0 == '0') // true
// // console.log(0 === '0') // false

// if (number === 0) {
//     number = 1
// }
// else if (number < 0) {
//     number = 'less than zero'
// }
// else if (number > 0) {
//     number *= 10
// }

// console.log(number)



// ТЕРНАРНЫЙ ОПЕРАТОР

// 1. ТОЛЬКО IF ELSE. Если будет else if (больше 1 условия) то тернарка не работает
// 2. Внутри тела if else должна быть одна строка кода

// Паспортный контроль но очень жесткий. Никого не пропускаем кроме Казахстанцев

// const userCountry = 'USA'

// if (userCountry === 'Kazakhstan') {
//     console.log('Можете проходить.')
// }
// else {
//     console.log('Вход воспрещен!')
// }

// userCountry === 'Kazakhstan' ? console.log('Можете проходить.') : console.log('Вход воспрещен!')
// console.log(userCountry === 'Kazakhstan' ? 'Можете проходить.' : 'Вход воспрещен!')


// Задание 2
// Перепишите код с использованием тернарного оператора

// let country = 'Sweden';
// let access;

// if (country == 'Sweden') {
//     access = true;
// }
// else{
//     access = false;
// }

// // 1
// country == 'Sweden' ? access = true : access = false
// // 2
// access = country == 'Sweden' ? true : false
// // 3
// access = country === 'Sweden' // false

// console.log(Boolean(0) === false)


// LOOPS - ЦИКЛЫ
// console.log('С новым годом!')


// FOR LOOP - ЦИКЛ FOR
// num = 11 => 11 <= 10

// for (let i = 1; i <= 200; i++) {
//     console.log('С новым годом!')
// }

// for (let i = 10; i >= 1; i--) {
//     console.log('С новым годом!', i)
// }

// for (let i = 10; i <= 20; i++) {
//     console.log('С новым годом!', i)
// }

// for (let i = 0; i < 10; i++) {
//     console.log('С новым годом!')
// }



// let num = 0

// for (let i = 0; i < 10; i++) {
//     num++
//     console.log(num)
// }

// console.log('Конечный результат: ', num)



// КАК ОСТАНОВИТЬ ЦИКЛ

// let num = 0

// for (let i = 0; i < 10; i++) {
//     if (num === 7) {
//         break // чтобы остановить цикл
//     }

//     num++
//     console.log(num)
// }

// console.log('Конечный результат: ', num)

// 0 1 2 3 4 5 6 7 8 9 -> 10
// 0 2 4 6 8 -> 10
// for (let i = 0; i < 10; i+=2) {
//     console.log('С новым годом!')
// }

// Задание 2

// Создать переменную и записать в нее число, например 10.
// 10 раз увеличить значение этой переменной на 1. Итоговый результат вывести в консоль.

// let num = 20

// for (let i = 0; i < 10; i++) {
//     num++
//     console.log(num)
// }

// console.log('Итоговый результат: ', num)



// Задание 4

// Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
// ** Задавать количество чисел, которые нужно вывести, при помощи функции prompt.

// 1
// for (let i = 0; i < 100; i++) {
//     // console.log(`Число: ${i}. Квадрат числа: ${i * i}`)
//     console.log(`Число: ${i}. Квадрат числа: ${i ** 2}`)
// }

// 2
// const userAnswer = Number(prompt('Введите число: '))

// if (isNaN(userAnswer) || userAnswer <= 1) {
//     console.log('Данные не корректны!')
// }
// else {
//     for (let i = 0; i < userAnswer; i++) {
//         // console.log(`Число: ${i}. Квадрат числа: ${i * i}`)
//         console.log(`Число: ${i}. Квадрат числа: ${i ** 2}`)
//     }
// }