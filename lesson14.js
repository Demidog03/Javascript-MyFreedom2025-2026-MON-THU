// const button = document.querySelector('button')
// button.addEventListener('click', () => {
//     console.log('Кнопка нажимается')
// })

// console.log('Привет')
// setTimeout(() => {
//     console.log('Таймаут 1')
// }, 0)
// setTimeout(() => {
//     console.log('Таймаут 2')
// }, 0)
// console.log('Пока')


// Задание 1
// Создайте кнопку которая включает таймер, представьте что вы готовите бешбармак
// И через 10 секунд появляется alert - Выключите огонь у казана!

const button = document.querySelector('button')
const timerDisplay = document.querySelector('#timerDisplay')

let currentInterval
let currentTimeout

button.addEventListener('click', () => {
    // button.disabled = true
    clearInterval(currentInterval)
    clearTimeout(currentTimeout)

    console.log('включает таймер')
    let timer = 10
    timerDisplay.classList.remove('hidden')
    timerDisplay.innerText = `Осталось: ${timer} сек.`

    currentInterval = setInterval(() => {
        timer--
        timerDisplay.innerText = `Осталось: ${timer} сек.`
    }, 1000)

    currentTimeout = setTimeout(() => {
        timerDisplay.innerText = `Бешбармак готов!`
        clearInterval(currentInterval)
        alert('Готов')
    }, 10000)
})
