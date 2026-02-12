// ОБЛАСТЬ ВИДИМОСТИ - SCOPE

// const, let - BLOCK SCOPED VARIABLE, Переменная с блочной областью видимости
// const text = 'Hello'

// if (true) {
//     const text = 'hi'
//     if (true) {
//         const text = 'bye'
//         if (true) {
//             const text = 'greetings'
//             console.log(text)
//         }
//     }
// }


// let text = 'hello'

// function changeText() {
//     if (true) {
//         text = 'Hi'
//     }
// }

// changeText()

// console.log(text)


// var - НЕ BLOCK-SCOPED переменная

// 1
// var text = 'Hello'
// var text = 'Hi'

// console.log(text)


// 2
// var text = 'Hi'

// if (true) {
//     if (true) {
//         if (true) {
//             var text = 'Hi'
//         }
//     }
// }

// console.log(text)


// var - FUNCTION SCOPED, с функциональной областью видимости
// var text = 'Hello'

// function func() {
//     var text = 'Hi' // 'bye'
//     if (true) {
//         var text = 'bye'
//         console.log(text)
//     }
// }

// func()

// console.log(text)



// CLOSURES - ЗАМЫКАНИЯ

// function outerFunc() { // Функция фабрика - fabric function
//     let counter = 0
    
//     return function () {
//         counter++
//         console.log(counter)
//     }
// }

// // outerFunc() => Ответ: function () {
// //         counter++
// //         console.log(counter)
// //     }

// // innerFunc => свой персональный counter
// const innerFunc = outerFunc() // let counter = 0
// innerFunc()
// innerFunc()
// innerFunc()
// innerFunc()

// // innerFunc2 => свой персональный counter
// const innerFunc2 = outerFunc()
// innerFunc2()
// innerFunc2()
// innerFunc2()
// innerFunc2()

// innerFunc()



// Задание 9


// Написать функцию, которая принимает целое число n.   
// Внутри функции запустить цикл от 1 до n с шагом 0.5. 
// На каждой итерации цикла выводить в консоль текущее 
// число (i) и информацию о том, целое ли оно.

// Такая функция не будет ничего возвращать, она просто выводит информацию в консоль.

// Пример, при запуске функции с параметром 3:
// "1 integer"
// "1.5 decimal"
// "2 integer"
// "2.5 decimal"

// function func() {

// }

// const func = function () {}

// const func = () => {}

// Number.isInteger() => true/false

// 1
// function showIntegerOrDecimal(n) {
//     for (let i = 1; i < n; i += 0.5) {
//         if (Number.isInteger(i)) {
//             console.log(i + ' integer')
//         }
//         else {
//             console.log(i + ' decimal')
//         }
//     }
// }

//2
// function showIntegerOrDecimal(n) {
//     for (let i = 1; i < n; i += 0.5) {
//         console.log(i + (Number.isInteger(i) ? ' integer' : ' decimal'))
//     }
// }

// showIntegerOrDecimal(5)




// OBJECTS - ОБЬЕКТЫ
// const phoneName = 'iPhone 17'
// const phoneColor = 'orange'
// const phoneMemorySize = 256
// const isNew = true

// const phoneName2 = 'Samsung s25'
// const phoneColor2 = 'black'
// const phoneMemorySize2 = 512
// const isNew2 = false


// (поле, свойство, ключ): значение
// (field, property, key): value
// const phone1 = {
//     name: 'iPhone 17',
//     color: 'orange',
//     memorySize: 256,
//     isNew: false,
//     "current price": 450000
// }

// const phone2 = {
//     "name": 'Samsung s25',
//     "color": 'black',
//     "memorySize": 512,
//     "isNew": true,
//     "current price": 350000
// }

// console.log(phone1)
// console.log(phone2)

// console.log(phone1.name)
// console.log(phone2.name)
// console.log(phone1.memorySize)
// console.log(phone2.color)

// console.log(phone1["current price"])
// console.log(phone1["name"])




// Манипуляции с обьектами
const phone1 = {
    name: 'iPhone 17',
    color: 'orange',
    memorySize: 256,
    isNew: false,
    "current price": 450000,
    shop: {
        name: "Mechta",
        address: "Astana"
    }
}

// Как менять значения
// phone1["current price"] = 470000
// phone1.memorySize = 512
// phone1.memorySize = 128
// phone1.memorySize = 256
// phone1.memorySize = 128
// phone1.memorySize = 512

// console.log(phone1)


// Как добавить новое поле
// phone1.isSale = true
// console.log(phone1)


// Как удалить поле
// phone1.name = null
// phone1.name = undefined
// delete phone1.name

// console.log(phone1)


// console.log(phone1.shop.name)


const coffee = {
  type: "Latte",
  temperature: "горячий",
  isSweet: false,

  coolDown: function () {
    this.temperature = "холодный";
    console.log("Кофе остыл ");
  },

  addSugar: function () {
    this.isSweet = true;
    console.log("Теперь кофе сладкий");
  }
};

coolDown()