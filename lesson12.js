// BOM - Browser Object Model

// LOCATION
// console.log(location.href)
// console.log(location.pathname)
// location.reload()
// location.replace('https://youtube.com')


// NAVIGATOR
// console.log(navigator)
// console.log(navigator.userAgentData.brands)
// console.log(navigator.userAgentData.platform)
// navigator.geolocation.getCurrentPosition((info) => {
//     console.log(info)
// })


// Задание 1

// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.

// Выведите в консоль строку:
// На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 
// (необходимые значения добавьте с помощью BOM)

// const browsers = ['Brave', 'Google Chrome', 'Microsoft Edge', 'Safari', 'Firefox']

// const os = navigator.userAgentData.platform;
// const braveBrand = navigator.userAgentData.brands.find(b => browsers.includes(b.brand));
// const browser = braveBrand ? `${braveBrand.brand}` : 'неизвестный браузер';
// const url = location.href;
// console.log(`На компьютере с ОС ${os} с помощью браузера ${browser} я открыл страничку ${url}`);

// HISTORY
// console.log(history)
// // console.log(history.back())
// history.go(1)

// SCREEN
// console.log(screen)


// DOM - Document Object Model
// const h1 = document.querySelector('h1')
// console.log(document.querySelector('h1'))
// console.dir(document.querySelector('h1'))
// h1.style.color = 'red'
// console.log(h1.innerText)
// h1.innerText = 'Goodbye'

// const h1Tags = document.querySelectorAll('h1')
// for (const h1 of h1Tags) {
//     console.log(h1)
// }

// console.log(document.querySelector('h1#hello3'))


// Задание 2
// В файле html есть разметка (добавьте ее в свой файл html):

// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>

// 2.1. Вывести в консоль каждое из имен (содержимое каждого li).

// 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

// const liTags = document.querySelectorAll('#list li')

// liTags.forEach((li) => {
//     console.log(li.innerText)
// })

// liTags.forEach((li, index) => {
//     li.innerText = index
// })


// Добавление/Создание/Удаление DOM элемента

// Удаление
// const list = document.querySelector('#list')
// list.remove()

// Задание 3

// Добавить к нескольким тегам на странице класс "forRemove". 
// Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.

// const itemsForRemove = document.querySelectorAll('.forRemove')

// for (const item of itemsForRemove) {
//     item.remove()
// }


// Создание/Добавление элемента

// const newH1 = document.createElement('h1')
// newH1.innerText = 'Hello'
// console.log(newH1)

// document.body.appendChild(newH1)

// newH1.style.color = 'red'


// Задание 4

// Создать с помощью js абзац (тег p). Добавить в него контент. 
// Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

// const newP = document.createElement('p')
// document.body.appendChild(newP)
// newP.innerText = 'Hello paragraph'
// newP.style.fontSize = '36px'
// newP.style.fontWeight = 'bold'



// Задание 5

// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. 
// Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое.
//  Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

// function elementGenerator(tagName, tagColor, text) {
//     const newElement = document.createElement(tagName)
//     newElement.style.color = tagColor
//     newElement.innerText = text
//     return newElement
// }

// const newElement1 = elementGenerator('h3', 'pink', 'Hello world!')
// console.log(newElement1)
// document.body.appendChild(newElement1)

// const newElement2 = elementGenerator('span', 'red', 'Hello span!')
// console.log(newElement2)
// document.body.appendChild(newElement2)


// Задание 6
// Вставить в страницу (в html документ) тег <select>.
//  С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2026.

// const yearSelect = document.querySelector('#yearSelect')

// for (let i = 1960; i <= 2026; i++) {
//     const newOption = document.createElement('option')
//     newOption.innerText = i
//     yearSelect.append(newOption)
// }


// Задание 7

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:


// const clients = [
//     {name: "Женя", order: true},
//     {name: "Кристина", order: true},
//     {name: "Павел", order: false},
//     {name: "Виолетта", order: false},
//     {name: "Костя", order: true}
// ]


// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом


// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", 
// где имя - свойство объекта (а объект здесь - это текущая ячейка массива),
//  статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

// const ul = document.querySelector('#list')

// const clients = [
//     {name: "Женя", order: true},
//     {name: "Кристина", order: true},
//     {name: "Павел", order: false},
//     {name: "Виолетта", order: false},
//     {name: "Костя", order: true}
// ]

// clients.forEach((client) => {
//     const li = document.createElement('li')

//     // let status
//     // if (client.order === true) {
//     //     status = 'оплатил/а'
//     // }
//     // else {
//     //     status = 'отменил/a'
//     // }
//     const status = client.order ? 'оплатил/а' : 'отменил/a'
//     li.innerText = `Клиент ${client.name} ${status} заказ`

//     ul.appendChild(li)
// })



// CLASS
const h1 = document.querySelector('h1')
// h1.className = 'red-text'
// h1.className = ''

// const div = document.querySelector('#container')
// // div.className = 'red-text'
// div.classList.add('red-text')
// div.classList.remove('container')
// console.log(div.classList.contains('red-text'))


h1.classList.toggle('red-text')