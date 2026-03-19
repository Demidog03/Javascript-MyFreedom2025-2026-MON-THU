// 1
// function sayHello() {
//     alert('Hello')
// }

// 2
// const clickBtn = document.querySelector('#clickBtn')
// // clickBtn.onclick = sayHello
// clickBtn.onclick = () => {
//     console.log('Hello')
// }
// clickBtn.onclick = () => {
//     alert('Hello')
// }
// // clickBtn.onclick = null


// 3
// const clickBtn = document.querySelector('#clickBtn')
// clickBtn.addEventListener('click', sayHello)
// clickBtn.addEventListener('click', () => {
//     console.log('Hello')
// })
// clickBtn.removeEventListener('click', sayHello)


// const clickBtn = document.querySelector('#clickBtn')
// const nameInput = document.querySelector('#nameInput')

// clickBtn.addEventListener('click', (e) => {
//     // console.log(e)
//     console.dir(nameInput.value)
// })

// Задание 1

// Описать в html тег input, button и тег ul. 
// По нажатию на button в список ul должен добавляться элемент li. 
// Содержимое li - нажатая клавиша.


// const input = document.querySelector('#input')
// const btn = document.querySelector('#btn')
// const list = document.querySelector('#list')

// function addLiTolist() {
//     const text = input.value.trim()

//     if (!text) {
//         return
//     }

//     const li = document.createElement('li')
//     li.innerText = text
//     list.appendChild(li)

//     input.value = ''
// }

// btn.addEventListener('click', () => {
//     addLiTolist()
// })

// input.addEventListener('keyup', (event) => {
//     if (event.key === 'Enter' || event.code === 'Enter') {
//         addLiTolist()
//     }
// })

// Задание 2

// Вставить в html тег input (просто предусмотреть в разметке).

// Обрабатывая событие keyup на теге input, 
// выводить в консоль введенный текст каждый раз, 
// как только клиент вписывает любой символ в поле
// (или стирает любой символ из поля). 
// Вам понадобится считывать значение поля, это input.value
// Доп: также рядом показывать какая клавиша была нажата

// const input = document.querySelector('#input')

// input.addEventListener('keyup', (event) => {
//     const text = event.target.value
//     const key = event.key

//     console.log(text + ' - ' + key)
// })


// ЗАДАНИЕ 3
// Нужно создать форму логина (input email, input password, кнопка Логин)
// При нажатии на кнопку Логин нужно вытащить данные из инпутов 
// И положить данные в обьект. Далее из обьекта подготовить JSON и показать в консоль



const inpLog = document.querySelector('#lgn')
const inpPass = document.querySelector('#pswrd')
const btn = document.querySelector('#btn')


btn.addEventListener('click', (e) => {
    const emailText = inpLog.value.trim()
    const passwordText = inpPass.value.trim()

    if (!emailText || !passwordText) {
        return
    }

    const formObject = {
        loginName: inpLog.value,
        logPassword: inpPass.value
    }

    const jsonForm = JSON.stringify(formObject)
    console.log(jsonForm)
})