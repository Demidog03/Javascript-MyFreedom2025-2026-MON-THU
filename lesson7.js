// ПРИМИТИВНЫЕ ТИПЫ ДАННЫХ
// let text = 'text' // 'text'
// let textCopy = text // 'text'

// text = 'Hi'
// textCopy = 'hello'

// console.log(text)
// console.log(textCopy)


// ССЫЛОЧНЫЙ ТИП ДАННЫХ - Обьект/Массив
// const student = {
//     name: 'Lilya',
//     lessonType: 'online'
// }

// const studentCopy = student

// studentCopy.name = 'Asylan'
// student.lessonType = 'offline'

// console.log(student)
// console.log(studentCopy)


// Скопировать обьект
// const student = {
//     name: 'Lilya',
//     lessonType: 'online',
//     address: { // address: #1254
//         country: 'Kazakhstan',
//         city: 'Astana'
//     }
// }

// // spread оператор => ...
// const studentCopy = { ...student } // { name: 'Lilya', lessonType: 'online', address: { country: 'Kazakhstan', city: 'Astana' } }

// studentCopy.name = 'Madina'
// studentCopy.address.city = 'Almaty'

// console.log(student)
// console.log(studentCopy)


// БЕЗОПАСНОЕ КОПИРОВАНИЕ ОБЬЕКТА

// JSON - Javascript Object Notation

// const student = { // #1234
//     name: 'Lilya',
//     lessonType: 'online',
//     address: { // address: #1254
//         country: 'Kazakhstan',
//         city: 'Astana'
//     }
// }

// const studentJSON = JSON.stringify(student)
// const studentCopy = JSON.parse(studentJSON)

// studentCopy.name = 'Madina'
// studentCopy.address.city = 'Almaty'

// console.log(student)
// console.log(studentJSON)
// console.log(studentCopy)


// ЦИКЛ для обьекта
// const student = {
//     name: 'Nurshat',
//     lessonType: 'offline',
//     address: {
//         country: 'Germany',
//         city: 'Berlin'
//     },
// }

// // FOR IN
// for (const key in student) {
//     console.log(key, student[key])
// }


// Задание 2

// Дан объект с именами и заработными платами:

// const engineers = {
//     Aidar: 2000,
//     Dulat: 5000,
//     Dmitry: 3000
// }

// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:

// Заработная плата ххх составляет ххх USD.

// ВНИМАНИЕ. Ваша программа должна работать для любого количества имён и зарплат!


// const engineers = {
//     Aidar: 5000,
//     Dulat: 5000,
//     Dmitry: 5000
// }

// for (const field in engineers) {
//     console.log(`Заработная плата ${field} составляет ${engineers[field]} USD.`)
// }




const suspects = {
  Madina: { age: 34, isGuilty: false, alibi: "At work" },
  Assel: { age: 28, isGuilty: true, alibi: "Unknown" },
  Lilya: { age: 41, isGuilty: false, alibi: "At gym" }
};

// Вывести в консоль всех подозревамых

// Suspect: Madina
// Age: 34
// Status: Невиновен/Виновен

for (const name in suspects) {
   console.log(`Suspect: ${name}`)
   console.log(`Age: ${suspects[name].age}`)
   console.log(`Status: ${suspects[name].isGuilty ? 'Виновен' : 'Невиновен'}`)
}