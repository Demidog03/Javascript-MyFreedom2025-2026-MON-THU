// MUTABLE
// push, pop, shift, unshift, reverse

// IMMUTABLE
// forEach, map, includes, some, toReversed, filter


// const numbers = [0, 1, 2, 3, 4]
// console.log(numbers.includes(3))
// console.log(numbers.includes(7))
// console.log(numbers.some((number) => {
//     return number === 3
// }))
// console.log(numbers.some((number) => {
//     return number === 7
// }))

// const cars = [
//     {
//         model: 'Toyota',
//         color: 'black'
//     },
//     {
//         model: 'BMW',
//         color: 'red'
//     },
//     {
//         model: 'Huyndai',
//         color: 'red'
//     }
// ]

// console.log(cars.includes({
//         model: 'BMW',
//         color: 'blue'
//     }))
// console.log(cars.some((car) => {
//     return car.model === 'BMW' && car.color === 'blue'
// }))

// console.log(cars.some((car) => {
//     return car.color === 'red'
// }))


// REVERSE
// cars.reverse()
// console.log(cars)

// toReversed
// console.log(cars.toReversed())
// console.log(cars)


// const reviews = [
//     { author: 'Max', rating: 5 },
//     { author: 'Vasya', rating: 4 },
//     { author: 'Hater', rating: 1 },
//     { author: 'User123', rating: 5 }
// ];

// 1. Проверь, есть ли в массиве хотя бы один отзыв с оценкой (rating) ниже 3.
// 2. Проверь, есть ли в массиве отзыв от автора Vasya.


// const reviews = [
//     { author: 'Max', rating: 5 },
//     { author: 'Vasya', rating: 4 },
//     { author: 'Hater', rating: 1 },
//     { author: 'User123', rating: 5 }
// ];

// console.log(reviews.some(review => review.rating < 3))
// console.log(reviews.some(review => review.author === 'Vasya'))

// FIND INDEX
// const numbers = [0, 1, 2, 3, 4]
// const numbers2 = [13, 6, 23, 111, 64]
// console.log(numbers.findIndex(number => number === 3))
// console.log(numbers2.findIndex(number => number === 23))
// console.log(numbers2.findIndex(number => number === 321312))


// FIND
// const numbers = [11, 23, 8, 45, 9]
// console.log(numbers.find(number => number === 8))
// console.log(numbers.find(number => number > 20))

// const reviews = [
//     { author: 'User123', rating: 5 },
//     { author: 'Max', rating: 5 },
//     { author: 'Vasya', rating: 4 },
//     { author: 'Hater', rating: 1 },
// ];

// console.log(reviews.find(review => review.rating === 4))
// console.log(reviews.find(review => review.rating === 5))



// ЗАДАНИЕ 2
// const users = [
//     { id: 1, name: 'John', email: 'john@example.com' },
//     { id: 2, name: 'Jane', email: 'jane@example.com' },
//     { id: 3, name: 'Charity', email: 'charity@example.com' }
// ];
// const ids = [1, 5, 10, 15];

// // 1. Найди индекс пользователя с email charity@example.com.
// // 2. Найди самого пользователя, чье имя John.
// // 3. Проверь с помощью includes, есть ли в массиве число 10 (используй массив ids).

// console.log(users.findIndex(user => user.email === 'charity@example.com'))
// console.log(users.find(user => user.name === 'John'))
// console.log(ids.includes(10))


// ЗАДАНИЕ 3
// const gadgets = [
//     { model: 'Samsung S23', price: 600000 },
//     { model: 'Xiaomi 13T', price: 250000 },
//     { model: 'Pixel 8', price: 550000 }
// ];

// 1. Объект телефона, который стоит меньше 300000.
// 2. Индекс телефона модели iPhone 15

// const gadgets = [
//     { model: 'Samsung S23', price: 600000 },
//     { model: 'Xiaomi 13T', price: 250000 },
//     { model: 'Pixel 8', price: 550000 }
// ];

// console.log(gadgets.find(gadget => gadget.price < 300000))
// console.log(gadgets.findIndex(gadget => gadget.model === 'iPhone 15'))



// filter

// const numbers = [4, 7, 32, 4, 9, 65, 4]
// // numbers[3] = null
// // console.log(numbers)

// const filteredNumbers = numbers.filter((number, index) => !(number === 4 && index === 3))
// console.log(numbers)
// console.log(filteredNumbers)


// const gadgets = [
//     { model: 'Pixel 8', price: 250000 },
//     { model: 'Samsung S23', price: 600000 },
//     { model: 'Xiaomi 13T', price: 250000 },
//     { model: 'Pixel 8', price: 550000 }
// ];

// const filteredGadgets = gadgets.filter(g => g.model === 'Pixel 8')
// console.log(filteredGadgets)


// ЗАДАНИЕ 4
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Отфильтруй его так, чтобы остались только четные числа.
// console.log(numbers.filter(number => number % 2 === 0))



// ЗАДАНИЕ 5
const candidates = [
    { name: 'Ivan', skills: ['HTML', 'CSS', 'JavaScript'], experience: 5 },
    { name: 'Alice', skills: ['Python', 'SQL'], experience: 10 },
    { name: 'Peter', skills: ['JavaScript', 'React'], experience: 2 },
    { name: 'Helga', skills: ['JavaScript', 'TypeScript', 'Node.js'], experience: 4 }
];

// У тебя есть список кандидатов на работу. Тебе нужно отфильтровать только тех, кто одновременно:
// 1. Имеет навык (skill) "JavaScript".
// 2. Имеет опыт работы (experience) более 3 лет.

const filteredCandidates = candidates.filter(c => c.experience > 3 && c.skills.includes('JavaScript'))
console.log(filteredCandidates)