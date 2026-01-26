// console.log('Привет мир!')
// console.log("Пока мир!")

// DEBUGING - Дебагинг - процесс анализа и поиска решений ошибок
// Outsource - компании которые делают проект другим компаниям
// Продуктовая - когда ваша компания делает свой проект (ваш)

// VARIABLES - ПЕРЕМЕННЫЕ

// VAR
// var student
// student = "Nurshat"
// console.log(student)
// student = "Assel"
// console.log(student)
// declaration (декларирование - создание переменной) -> var student
// initialization (инициализация - создание + присвоение значения) -> var student = "Дмитрий" 
// assigning (присвоение значения) -> student = "Nurshat"
// P.S. initialization = declaration + assigning

// ПРОБЛЕМЫ VAR:
// 1 - можно создавать несколько одинковых переменных
// var car = 'Toyota'
// var car = 'BMW'
// console.log(car)

// 2 - Можно получить доступ к переменные раньше чем создал переменную
// console.log(plane)
// var plane = 'Fly Arystan'


// LET
// let student = "Madina"
// student = "Dulat"
// console.log(student)


// CONST
// Constant - константа
// const student = "Duman"
// student = "Aidar"
// console.log(student)
// РЕКОМЕНДАЦИЯ - ВСЕГДА СОЗДАВАТЬ ПЕРЕМЕННУЮ ЧЕРЕЗ const


// DATA TYPES - ТИПЫ ДАННЫХ

// STRING - строка (текст)
// 'Привет'
// "Привет"
// `Привет`

// const message1 = 'Привет, сегодня \'все\' по плану?'
// console.log(message1)
// const message2 = "Да по плану"
// console.log(message2)


// NUMBER - число
// 5
// 1
// 3.14
// 500000

// const salary = 500000 + 100000
// console.log(salary)


// BOOLEAN - булевый (истина или ложь)
// true
// false

// camelCase
// redCar
// veryGoodHouse

// red_car
// very_good_house

// RED_CAR
// VERY_GOOD_HOUSE
// const PI_NUMBER = 3.14

// class RedCar
// class VeryGoodHouse
// class Student

// const doIHavePhone = true
// console.log(doIHavePhone)

// const isMarried = false
// console.log(isMarried)

// const canICode = true
// console.log(canICode)


// UNDEFINED
// let text = undefined
// console.log(text)

// NULL
// const middleName = null
// console.log(middleName)


// SYMBOL - Символ
// const name1 = Symbol('Aidar')
// const name2 = Symbol('Aidar')
// console.log(name1 === name2)


// BIGINT - Большое число
// const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n


// Object - обьект
// const name = 'Olzhas'
// const surname = 'Otep'
// const age = 22
// const isMarried = false

// const person1 = {
//     name: 'Olzhas',
//     surname: 'Otep',
//     age: 22,
//     isMarried: false
// }

// console.log(person1.age)


// Слаботипизированный
// let text = 'Hello'
// text = 22
// text = false
// text = null
// console.log(text)


// КОНКАТЕНАЦИЯ СТРОК - string concatination
// console.log('Привет' + ' Мир')

const reciever = 'Тимур'
const sender = 'Олжас'

// 1-решение
console.log('С новым годом тебя, ' + reciever + '! Желаю тебе самых лучший пожеланий, здоровья, успеха и благополучия. С уважением, ' + sender + '!')

// 2-решение
console.log(`С новым годом тебя, ${reciever}! Желаю тебе самых лучший пожеланий, здоровья, успеха и благополучия. С уважением, ${sender}!`)

// 1. Внутри строки положить переменные
// 2. Отобразить результат в консоль


