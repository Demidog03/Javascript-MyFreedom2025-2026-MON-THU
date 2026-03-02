// MUTABLE - массив, обьект или строка подвергается изменениям
// splice

// IMMUTABLE - массив, обьект или строка НЕ подвергается изменениям
// includes, startsWith, endsWith, toLowerCase, toUpperCase, trim, slice, toSpliced, substring, SPLIT

// МЕТОДЫ СТРОК
// const text = 'Frontend iS tHe BEST!'

// console.log(text.includes('Frontend'))
// console.log(text.includes('the best'))
// console.log(text.includes('frontend'))

// console.log(text.startsWith('Frontend'))
// console.log(text.startsWith('best'))
// console.log(text.startsWith(' Frontend'))

// console.log(text.endsWith('best'))
// console.log(text.endsWith('best!'))
// console.log(text.endsWith('!'))
// console.log(text.endsWith('st!'))

// console.log(text.toLowerCase())
// console.log(text.toUpperCase())
// console.log(text)


// ЗАДАЧА 1
// const text = 'Frontend iS tHe BEST!'

// frontend, Frontend
// text.includes('Frontend') ==> true
// text.includes('frontend') ==> true
// text.includes('fRoNteNd') ==> true

// const text = '   Frontend iS tHe BEST!       '; // toUpperCase => FRONTEND IS THE BEST!

// const searchText1 = '   Frontend is ' // toUpperCase => FRONTEND => true
// const searchText2 = 'FrOntEnd    ' // toUpperCase => FRONTEND => true
// const searchText3 = ' FRONTEND' // toUpperCase => FRONTEND => true

// const result1 = searchForText(text, searchText1)
// const result2 = searchForText(text, searchText2)
// const result3 = searchForText(text, searchText3)

// console.log(result1, result2, result3)

// function searchForText(originalText, text) {
//     return originalText.toLowerCase().trim().includes(text.toLowerCase().trim())
// }

// trim()


// SLICE
// const numbers = [12, 4, 64, 2, 86, 4]
// console.log(numbers.slice(0, 3)) // ctrl C
// console.log(numbers.slice(2, 4))
// console.log(numbers.slice(3, 6))
// console.log(numbers.slice(3))
// console.log(numbers.slice(1))
// console.log(numbers.slice(2, -2))

// SPLICE, toSpliced
// console.log(numbers.toSpliced(0, 3)) // ctrl x
// console.log(numbers.toSpliced(2, 2))
// console.log(numbers)



// SLICE but for STRING
// const text = 'Hello world!'
// console.log(text[0])
// console.log(text[1])
// console.log(text.slice(0, 5))
// console.log(text.slice(6))
// console.log(text.slice(6, -2))

// console.log(text.substring(0, 5))
// console.log(text.substring(6))
// console.log(text.substring(6, -6))

// console.log(text[-1])
// console.log(text.at(-1))
// console.log(text.at(0))


// ЗАДАНИЕ 1. 
// Представь, что тебе нужно скрыть номер банковской карты для безопасности.
// const cardNumber = "4276550011221234"; // 4***********1234

// 1. Оставь последние 4 цифры номера
// 2. Получи самую первую цифру номера
// 3. Соедини их так, чтобы получилось: 4***********1234

// function hideCardNumber(cardNumber) {
//     // const lastFour = cardNumber.slice(12, 16)
//     const lastFour = cardNumber.slice(-4)
//     const first = cardNumber.at(0)
//     return `${first}***********${lastFour}`
// }

// console.log(hideCardNumber(cardNumber))
// console.log(hideCardNumber('6276250011522704'))


// SPLIT
// const names = 'Drimtry, Vladimir, Assel, Nurshat, Dulat, Drimtry'
// console.log(names.split(', '))

// REPLACE
// console.log(names.replace('Drimtry', 'Aidar'))
// console.log(names.replaceAll('Drimtry', 'Aidar'))


// ЗАДАНИЕ 2
const dirtyUrl = "https://myshop.ru/archive/fdsfsd/old-iphone-15-pro/fdsfsdfsdfxcvcxvxc";

// У тебя есть «грязная» ссылка на категорию товара, которая пришла из старой системы.
// Ожидаемый результат: "new iphone 15 pro max"

// 1.
const phoneText = dirtyUrl.slice(-21).replaceAll('-', ' ').replace('old', 'new')
console.log(phoneText)

// 2.
const splittedUrl = dirtyUrl.split('/')
const phone = splittedUrl.find(path => path.includes('old'))
console.log(phone.replaceAll('-', ' ').replace('old', 'new'))