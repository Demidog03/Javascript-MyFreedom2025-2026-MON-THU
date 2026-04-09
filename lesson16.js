// console.log('Hello') // 1
// const promise = new Promise((resolve) => { 
//     console.log('Создание промиса') // 2

//     resolve('Промис выполнился')
// })
// setTimeout(() => {
//     console.log('Таймаут выполнился 1') // 5
// }, 0)
// setTimeout(() => {
//     console.log('Таймаут выполнился 2') // 6
// }, 0)
// promise.then((result) => {
//     console.log(result) // 3
// })
// console.log('Bye') // 4

// 1, 2, 4, 5, 3


// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');
//   Promise.resolve().then(() => {
//     console.log('Promise inside Timeout');
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 1');
//   setTimeout(() => {
//     console.log('Timeout inside Promise');
//   }, 0);
// });

// console.log('End');

// Пропишите порядок выполнения кода


// Отправим первый REST API запрос на бэкенд
fetch('https://api.escuelajs.co/api/v1/products').then((response) => {
    return response.json()
}).then((products) => {
    console.log(products)

    const productsList = document.querySelector('#productsList')

    for (const product of products) {
        const li = document.createElement('li')
        li.innerText = product.title
        productsList.appendChild(li)
    }
})

// Ответ запроса для получения продуктов отобразить в ul в html. 
// В li положите значение поля title
