// Задача 1
// Создайте переменные для хранения следующей информации:
// - имя пользователя (строка)
// - возраст (число)
// - статус онлайн (булево значение)
// Выведите все переменные в консоль

// let, const
// console.log()

// const userName = 'Dulat'
// const age = 21
// const status = true

// console.log(userName + ' ' + age + ' ' +  status)
// console.log(userName, age, status)



// Задача 4: Простая конкатенация
// Создайте две переменные: firstName и lastName
// Объедините их в одну строку fullName через пробел
// Выведите приветствие: "Привет, [полное имя]!"

// const firstName = 'Kairat'
// const lastName = 'Nurtas'

// console.log(`Привет, ${lastName} ${firstName}!`)


// typeof Оператор
// console.log(typeof 'Hello')
// console.log(typeof 40)
// console.log(typeof true)
// console.log(typeof null)
// console.log(typeof undefined)

// const country = 'Kazakhstan'
// console.log(typeof country)


// Задача 2: Типы данных
// Создайте по одной переменной каждого типа:
// string, number, boolean, undefined, null
// Используйте typeof для проверки типа каждой переменной
// В консоль вывести типы данных всех переменных

// const text = 'gfsdgfdgdf'
// const num1 = 12
// const isOnline = true
// const someVar1 = undefined
// const someVar2 = null

// console.log(typeof text, typeof num1, typeof isOnline, typeof someVar1, typeof someVar2)


// АРИФМЕТИЧЕСКИЕ ОПЕРАТОРЫ
// console.log(10 + 5) // 15
// console.log(10 - 5) // 5
// console.log(10 * 5) // 50
// console.log(10 / 5) // 2
// console.log(10 % 9) // % модуль 1
// console.log(10 ** 3) // 1000
// console.log(10 + 5 * 2) // 20
// console.log((10 + 5) * 2) // 30

// console.log(20 % 5) // 0
// console.log(10 % 2) // 0 - четное число
// console.llg(15 % 2) // 1 - нечетное число


// console.log('10' + 10) // 1010
// console.log(10 + '10') // 1010
// console.log('10' - 10) // 10 - 10 = 0
// console.log(10 * '10') // 100
// console.log(10 / 0) // Infinity


// Задача 3: Изменение значений
// Создайте переменную counter со значением 0
// Увеличьте её значение на 5
// Затем удвойте результат
// Выведите финальное значение в консоль

// let counter = 0
// counter += 5 // counter = 0 + 5 = 5
// counter *= 2 // counter = 5 * 2 = 10
// console.log('Результат: ' + counter)

// Сокращения +=, -=, ++, --
// let num = 1
// // num = num + 1 // num = 1 + 1 = 2
// // num += 1 // num = num + 1
// // num += 5 // num = num + 5
// // num -= 3 // num = num - 3
// // num /= 2 // num = num / 2
// num++ // num += 1
// num-- // num -= 1
// console.log(num)


// КОНВЕРТАЦИЯ СТРОКИ В ЧИСЛО
// console.log(+'10')
// console.log(Number('10'))
// console.log(parseInt('10'))
// console.log(parseFloat('10'))

// console.log(parseInt('3.14'))
// console.log(parseFloat('3.14'))

// console.log(Number('Aibar')) // NaN - Not a Number
// console.log(typeof NaN) // number

// console.log(NaN + 5) // NaN


// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ (true, false)
// && - AND (И)

// console.log(true && true) // true
// console.log(false && true) // false
// console.log(true && false) // false
// console.log(false && false) // false


// || - OR (ИЛИ)
// console.log(true || true) // true
// console.log(true || false) // true
// console.log(false || true) // true
// console.log(false || false) // false


// ОПЕРАТОРЫ СРАВНЕНИЯ

// console.log(5 > 0) // true
// console.log(5 < 0) // false
// console.log(5 >= 5) // true
// console.log(10 <= 15) // true
// console.log(10 == 10) // true
// console.log(5 == 10) // false
// console.log(7 == '7') // true
// console.log(7 === '7') // false
// console.log(8 != 9) // true
// console.log(4 !== '4')

// === и !== => крайне рекомендуются

// console.log(!true) // false
// console.log(!false) // true
// console.log(!!true) // true
// console.log(!!!true) // false
// console.log(!0) // true

// console.log(!(10 >= 10 === !(5 < 2)))

// true === true = true
// !true = false



// FALSY VALUES
// 1. значение false
// 2. число 0
// 3. пустая строка ''
// 4. null
// 5. undefined
// 6. NaN

// console.log(Boolean(true))
// console.log(Boolean(false))
// console.log(Boolean(20))
// console.log(Boolean(-12))
// console.log(Boolean(0))
// console.log(Boolean('Lilya'))
// console.log(Boolean(' '))
// console.log(Boolean(''))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))



// IF ELSE STATEMENT

// Спросить у пользователя его возраст. 
// Если пользователю меньше 18 - права не выдаем
// Если больше 18 - права выдаем

// const userAnswer = prompt('Укажите пожалуйста ваш возраст')
// const userAge = Number(userAnswer)
// // userAge = NaN

// if (isNaN(userAge)) { // isNaN(NaN) = true
//     alert('Вы ввели неправильные данные!')
// }
// else if (userAge >= 18) { // 17 > 18 = false
//     alert('Вы можете получить права!')
// }
// else {
//     alert('Вам нет 18. Права не могу выдать')
// }