// Задание 7

// Определить массив const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

// Создать новый массив из элементов массива arr, 
// но в новом должны содержаться только положительные элементы.

// Подсказка. Изначально нужно объявить пустой массив-хранилище 
// (например, const newArr = []). Затем пройтись в цикле по массиву arr, 
// и в каждой итерации, если элемент положительный, добавлять его в массив newArr.

// const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// const arr2 = []

// for (const number of arr) {
//     if (number > 0) {
//         arr2.push(number)
//     }
// }

// console.log(arr)
// console.log(arr2)



// Задача
// Создать функцию filterArrayByLimit(array, limit) с параметром array и limit
// В теле функции создать и вернуть (return) 
// новый массив с значениями которые больше или равны limit

// Test cases:
// 1
// const numbers = [4, 53, 76, -23, 5, 12]
// filterArrayByLimit(12) => [12, 53, 76]

// 2
// const numbers = [1, 2, 3, 4, 5]
// filterArrayByLimit(2) => [2, 3, 4, 5]


// const numbers = [4, 53, 76, -23, 5, 12]
// const numbers2 = [1, 2, 3, 4, 5]

// function filterArrayByLimit(array, limit) {
//     const filteredArray = []
    
//     for (const number of array) {
//         if (number >= limit) {
//             filteredArray.push(number)
//         }
//     }

//     return filteredArray
// }

// console.log(filterArrayByLimit(numbers, 12))
// console.log(filterArrayByLimit(numbers2, 2))


// ВИДЫ КОПИРОВАНИЯ МАССИВА
// const oneStudent = {
//     name: 'Asylan',
//     lessonType: 'online'
// }

// const students = [ // [#ссылка1, #ссылка2]
//     {
//         name: 'Lilya',
//         lessonType: 'online'
//     }, // students[0]
//     {
//         name: 'Dulat',
//         lessonType: 'offline'
//     }
// ]

// console.log(students[0].name)
// console.log(students[1].lessonType)


// Копирование через spread оператор
// ЕСЛИ ССЫЛОЧНЫЕ ЗНАЧЕНИЯ ВНУТРИ МАССИВА ТАК "НЕЛЬЗЯ" КОПИРОВАТЬ
// const studentsCopy = [oneStudent, ...students]
// const studentsCopy = [...students] // [object1, object2] => [#ссылка1, #ссылка2]

// studentsCopy[0].name = 'Assel'

// console.log('students: ', students)
// console.log('studentsCopy: ', studentsCopy)


// ЕСЛИ ПРИМИТИВНЫЕ ЗНАЧЕНИЯ ВНУТРИ МАССИВА ТАК МОЖНО КОПИРОВАТЬ
// const numbers = [1, 2, 3, 4]
// const numbersCopy = [...numbers]

// numbersCopy[0] = 8

// console.log(numbers, numbersCopy)


// JSON
// const students = [
//     {
//         name: 'Lilya',
//         lessonType: 'online'
//     },
//     {
//         name: 'Dulat',
//         lessonType: 'offline'
//     }
// ]

// const studentsJSON = JSON.stringify(students)
// const studentsCopy = JSON.parse(studentsJSON)

// studentsCopy[0].name = 'Assel'

// console.log('students: ', students)
// console.log('studentsJSON: ', studentsJSON)
// console.log('studentsCopy: ', studentsCopy)


// МЕТОД ИЛИ ФУНКЦИЯ
// function log() { // функция

// }

// console.log(console)
// console.log() // метод


// FOR EACH - Loop but with extra steps - Цикл с лишней возней
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers)

// Callback function - функция которая передается как параметр другой функции

// numbers.forEach(function () {})

// numbers.forEach((number, index) => {
//     if (number === 4) {
//         break
//     } // index = number, number = index
//     console.log(index, number)
// })

// for (const number of numbers) {
//     if (number === 4) {
//         break
//     }
//     console.log(number)
// }

// Задание 9

// Существует массив объектов, описывающих пользователей, например:
// const users = [
//     {
//         name: 'Vasya',
//         age: 23
//     },
//     {
//         name: 'Olya',
//         age: 12
//     },
//     {
//         name: 'Anna',
//         age: 22
//     },
//     {
//         name: 'Alex',
//         age: 18
//     },
//     {
//         name: 'Valery',
//         age: 8
//     }
// ]

// Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.
// Использовать forEach для обхода массива

// numbers.forEach((number, index) => {
//     console.log(index, number)
// })

// users.forEach((user) => {
//     if (user.age > 15) {
//         console.log(user.name)
//     }
// })



// MAP
// const numbers = [1, 2, 3, 4, 5]

// // const numbers2 = numbers.map((number) => {
// //     return number + 10
// // })

// // const numbers2 = numbers.map((number) => {
// //     return undefined // => undefined
// //     return // => undefined
// //         // => undefined
// // })


// const numbers2 = numbers.map((number) => {
//     if (number !== 3) {
//         return number
//     }
// })

// console.log('numbers: ', numbers)
// console.log('numbers2', numbers2)


// Задание 4

// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива - forEach или map.

// function copyArr(arr) {
//     const arrCopy = arr.map(element => {
//         return element
//     })

//     return arrCopy
// }

// function copyArr(arr) {
//     return arr.map(element => element)
// }

// const numbers = [1, 2, 3]
// const numbersCopy = copyArr(numbers)

// console.log('numbers: ', numbers)
// console.log('numbersCopy: ', numbersCopy)
