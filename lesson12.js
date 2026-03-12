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

const h1Tags = document.querySelectorAll('h1')
for (const h1 of h1Tags) {
    console.log(h1)
}

console.log(document.querySelector('h1#hello3'))


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

const liTags = document.querySelectorAll('#list li')

liTags.forEach((li) => {
    console.log(li.innerText)
})

liTags.forEach((li, index) => {
    li.innerText = index
})