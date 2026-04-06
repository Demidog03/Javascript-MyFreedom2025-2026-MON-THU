// PROMISE - Обещание - Посмотрим

// 1. Pending - Ожидание (Процесс оформления телефона)
// 2. Fulfilled - Успешно (Телефон удачно оформлен. Деньги списались)
// 3. Rejected - Отказ (Не смогли оформитьь телефон. Причины разные - недостаточно баланса)

// const balance = 350_000
// const phone = {
//     name: 'iPhone 17 pro max 1tb',
//     price: 1_200_000,
//     inStock: false
// }
// const hasGoodCreditHistory = false

// const buyPhoneFromKaspyPromise = new Promise((resolve, reject) => {
//     console.log('🛒 Заказ оформляется...')

//     setTimeout(() => {
//         if (!phone.inStock) {
//             reject('Товара нет в наличии. Невозможно оформить ваш заказ')
//         }
//         else {
//             if (balance < phone.price) {
//                 reject('Извините, недостаточно средств на балансе. Покупка отклонена.' + (hasGoodCreditHistory ? ' Но у вас есть возможность оформить рассрочку.' : ''))
//             }
//             else {
//                 resolve('Поздравляю! Телефон оформлен и ждет доставку на ваш адрес!')
//             }
//         }
//     }, 1000)
// })

// buyPhoneFromKaspyPromise.then((result) => {
//     console.log(result)
//     alert(result)
// }).catch((result) => {
//     console.log(result)
//     alert(result)
// }).finally(() => {
//     console.log('Процесс оформления заказа завершен!')
// })

// 1
// Нужно добавить поле inStock (в наличии) с типом boolean
// Даже если баланс есть но телефон не в наличии то нужно отказать

// 2
// Если баланса нет но есть хорошая кредитная история, нужно предложить пользователю оформить рассрочку/кредит
// hasGoodCreditHistory - boolean
// Извините, недостаточно средств на балансе. Покупка отклонена. Но вы можете оформить рассрочку/кредит


// PROMISE CHAIN - Цепочка промисов

// Заказ кофе - Zebra/Master coffee

// ШАГ 1: Кассир принимает заказ
function placeOrder(drinkName) {
    return new Promise((resolve, reject) => {
        console.log(`Вы: Можно мне ${drinkName}?`)
        console.log('Кассир: Пробиваю чек...')

        // имитируем время оплату (1 секунда)
        setTimeout(() => {
            if (drinkName === 'Чай') {
                reject('Кассир: Извините, у нас закончилась заварка.')
            }
            else {
                console.log('Кассир: Оплата прошла!')
                resolve({
                    drink: drinkName,
                    ticketNumber: Math.floor(Math.random() * 100)
                })
            }
        }, 1000)
    })
}

// ШАГ 2: Бариста готовит напиток
function brewDrink(order) {
    return new Promise((resolve, reject) => {
        const isCoffeeMachineWorking = false

        console.log(`Бариста: Вижу заказ #${order.ticketNumber}. Начинаю готовить ${order.drink}...`)

        setTimeout(() => {
            if (!isCoffeeMachineWorking) {
                reject(`Бариста: Кофе машина не работает. Не могу приготовить ваш заказ(`)
            }
            else {
                resolve(`Бариста: Заказ #${order.ticketNumber} готов!`)
            }
        }, 5000)
    })
}

// ШАГ 3: Клиент (вы) получает готовый заказ
function clientFeedback() {
    return new Promise((res, rej) => {
        const isCoffeeTastedBad = true

        console.log('Вы: *пьете кофе...')

        setTimeout(() => {
            if (isCoffeeTastedBad) {
                rej('Вы: Кофе на вкус не очень. В 2гис оценку поставлю тоже не очень')
            }
            else {
                res('Вы: Получилось очень вкусное кофе! Большое спасибо!')
            }
        }, 1000)
    })
}

const placeOrderPromise = placeOrder('Чай')

placeOrderPromise.then((order) => {
    console.log(order)
    return brewDrink(order)
}).then((message) => {
    console.log(message)
    return clientFeedback()
}).then((message) => {
    console.log(message)
}).catch((error) => {
    console.error(error)
})

// const placeOrderPromise2 = placeOrder('Чай')

// placeOrderPromise2.then((order) => {
//     console.log(order)
// }).catch((error) => {
//     console.log(error)
// })
