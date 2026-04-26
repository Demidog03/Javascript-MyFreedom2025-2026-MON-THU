// OOP - Object Orientend Programming

// 1. Обьекты
// 2. Чертежи, шаблоны - Class

// class Smartphone {
//     // const this = {}
//     isNew = true
//     // this = {
//     //     isNew: true
//     // }

//     constructor(name, size, color, inStock) {
//         this.name = name
//         this.size = size
//         this.color = color
//         this.inStock = inStock
//         // this = {
//         //     name: 'Samsung',
//         //     size: 256,
//         //     color: 'black',
//         //     inStock: false,
//         // }
//     }

//     showInfo() {
//         console.log(`Модель: ${this.name}, память: ${this.size}, цвет: ${this.color}`)
//     }

//     // return this
// }

// const phone1 = new Smartphone('Samsung', 256, 'black', false)
// const phone2 = new Smartphone('Huawei', 128, 'red', true)
// const phone3 = new Smartphone('Oppo', 512, 'white', true)

// console.log(phone1)
// console.log(phone2)
// console.log(phone3)

// phone1.showInfo()
// phone2.showInfo()
// phone3.showInfo()

// const phone1Obj = {
//     name: 'Samsung',
//     size: 256,
//     color: 'black',
//     inStock: false,
//     showInfo() {
//         console.log(`Модель: ${phone1.name}, память: ${phone1.size}`)
//     }
// }

// const phone2 = {
//     name: 'Huawei',
//     size: 128,
//     color: 'red',
//     inStock: true,
//     showInfo() {
//         console.log(`Модель: ${phone2.name}, память: ${phone2.size}`)
//     }
// }

// const phone3 = {
//     name: 'Oppo',
//     size: 512,
//     color: 'white',
//     inStock: true,
//     showInfo() {
//         console.log(`Модель: ${phone3.name}, память: ${phone3.size}`)
//     }
// }


// console.log(phone1Obj)
// console.log(phone2)

// phone1.showInfo()
// phone2.showInfo()
// phone3.showInfo()


// Задание: "Карточка товара Ozon" 🛒
// В этом задании мы добавим немного математики для расчета скидки, 
// чтобы класс приносил реальную пользу.

// Что нужно сделать:

// Создай класс ProductCard.

// Добавь constructor, который принимает три параметра: 
// title (название товара), price (базовая цена) и discount (скидка в процентах). 
// Сохрани их в свойства объекта.

// Добавь метод getFinalPrice(). Он должен высчитывать и возвращать цену с учетом скидки.
// (Подсказка: формула расчета — цена - (цена * скидка / 100)).

// Добавь метод showInfo(). 
// Он должен выводить в консоль красивое сообщение для покупателя, например:
// "Товар: [название]. Обычная цена: [цена]тг. Цена по Ozon Карте (скидка [скидка]%): [итоговая цена]тг!".
// Внутри этого метода нужно будет вызвать метод getFinalPrice(), чтобы получить итоговую цену.

// Создай экземпляр класса ProductCard, например, беспроводные наушники за 2000 тг со скидкой 15%.

// Вызови метод showInfo().


// class ProductCard {
//     constructor(title, price, discount) {
//         this.title = title
//         this.price = price
//         this.discount = discount
//     }

//     getFinalPrice() {
//         return this.price - (this.price * this.discount/100)
//     }

//     showInfo() {
//         console.log(`Товар: ${this.title}. Обычная цена: ${this.price}тг. Цена по Ozon Карте (скидка ${this.discount}%): ${this.getFinalPrice()}тг!`)
//     }
// }

// const productCard1 = new ProductCard('Чехол на телефон', 2000, 15)

// productCard1.showInfo()

// class Book {
//     constructor(title, author, isAvailable) {
//         this.title = title
//         this.author = author
//         this.isAvailable = isAvailable
//     }
// }

// class Library {
//     books = []

//     addBook(newBook) {
//         this.books.push(newBook)
//     }

//     tookBooks() {
//         console.log(this.books.filter(b => b.isAvailable))
//     }
// }

// const library = new Library()

// const book1 = new Book('Абай Жолы', 'Мухтар Ауезов', true)
// const book2 = new Book('Жабайы Алма', 'Сайын Муратбеков', false)
// const book3 = new Book('Мастер и Маргарита', 'Михаил Булгаков', true)

// library.addBook(book1)
// library.addBook(book2)
// library.addBook(book3)

// console.log(library)
// library.tookBooks()


// Класс ShoppingCart (Корзина)

// Создай класс ShoppingCart.

// items = [] — это будет пустой массив, 
// в который мы будем складывать наши товары.

// Добавь метод addProduct(product). Этот метод должен принимать объект товара 
// (созданный через класс Product) и добавлять его в массив this.items (используй метод массива .push()).

// Добавь метод getTotalPrice(). Он должен пройтись по всему массиву this.items,
//  сложить цены всех товаров и вернуть итоговую сумму.

// Добавь метод printReceipt(). Он должен вывести красивый чек в консоль: 
// перечислить все товары и показать итоговую сумму (для этого вызови внутри getTotalPrice()).

// Чек:
// - Кофе: 300тг
// - Круассан: 150тг
// Итого к оплате: 450тг

// class ProductCard {
//     constructor(title, price, discount) {
//         this.title = title
//         this.price = price
//         this.discount = discount
//     }

//     getFinalPrice() {
//         return this.price - (this.price * this.discount/100)
//     }

//     showInfo() {
//         console.log(`Товар: ${this.title}. Обычная цена: ${this.price}тг.` + (this.discount ? ` Цена по Ozon Карте (скидка ${this.discount}%): ${this.getFinalPrice()}тг!` : ''))
//     }
// }

// const productCard1 = new ProductCard('Чехол на телефон', 2000, 15)
// const productCard2 = new ProductCard('Робот-пылесос', 20_000, 7)
// const productCard3 = new ProductCard('Смарт-часы', 30_000, 5)
// const productCard4 = new ProductCard('Посудомойку', 800_000, 0)

// productCard1.showInfo()
// productCard2.showInfo()
// productCard3.showInfo()
// productCard4.showInfo()

// class ShoppingCart {
//     products = []

//     addProduct(newProduct) {
//         this.products.push(newProduct)
//     }

//     getTotalPrice() {
//         let total = 0
//         for (const product of this.products) {
//             total += product.getFinalPrice()
//         }
//         return total
//     }

//     printReceipt() {
//         console.log('Чек:')
//         for (const product of this.products) {
//             console.log(`- ${product.title}: ${product.getFinalPrice()}тг`)
//         }
//         console.log(`Итого: ${this.getTotalPrice()}тг`)
//     }
// }

// const shoppingCart = new ShoppingCart()

// shoppingCart.addProduct(productCard1)
// shoppingCart.addProduct(productCard2)
// shoppingCart.addProduct(productCard3)
// shoppingCart.addProduct(productCard4)

// console.log(shoppingCart)
// console.log(shoppingCart.getTotalPrice())

// shoppingCart.printReceipt()


// Принципы ООП

// 1. Инкапсуляция (Encapsulation)

// class KaspiBank {
//     #balance = 100_000; // приватное поле
//     #pincode = null
//     #attempts = 3

//     constructor(pincode) {
//         if (!pincode) {
//             throw new Error('Пожалуйста введите пинкод!')
//         }
//         this.#pincode = pincode
//     }

//     #decreaseAttempts() {
//         if (this.#attempts > 0) {
//             this.#attempts--
//         }
//     }

//     #checkAttempts() {
//         if (this.#attempts <= 0) {
//             console.error('Превышено кол-во попыток! Карта заблокирована')
//             return false
//         }
//         return true
//     }

//     #resetAttempts() {
//         this.#attempts = 3
//     }

//     deposit(amount, pincode) {
//         if (!this.#checkAttempts()) {
//             return
//         }

//         if (this.#pincode === pincode) {
//             this.#balance += amount
//             console.log(`Вам поступил платеж! Баланс: ${this.#balance}`)
//             this.#resetAttempts()
//         }
//         else {
//             this.#decreaseAttempts()
//             console.error('Неверный пинкод!')
//         }
//     }

//     changePincode(oldPincode, newPincode) {
//         if (!this.#checkAttempts()) {
//             return
//         }

//         if (oldPincode === this.#pincode) {
//             this.#pincode = newPincode
//             console.log('Пинкод успешно изменен!')
//         }
//         else {
//             this.#decreaseAttempts()
//             console.error('Неверно введен старый пинкод!')
//         }
//     }

//     showBalance(pincode) {
//         if (!this.#checkAttempts()) {
//             return
//         }

//         if (this.#pincode === pincode) {
//             console.log(`Текущий баланс: ${this.#balance}`)
//         }
//         else {
//             this.#decreaseAttempts()
//             console.error('Неверно введен старый пинкод!')
//         }
//     }
// }

// const myBank = new KaspiBank('1234')
// // myBank.#balance = 1_000_000
// // console.log(myBank.#balance)
// console.log(myBank)
// myBank.deposit(200_000, '1234')
// myBank.deposit(50_000, '4321')
// myBank.deposit(50_000, '4321')
// myBank.deposit(200_000, '1234')
// // myBank.changePincode('4321', '5555')
// // myBank.changePincode('4321', '5555')
// // myBank.changePincode('4321', '5555')
// // myBank.changePincode('4321', '5555')

// myBank.showBalance('1234')

// Дополнить класс

// Создать метод для смены пин кода - в методе требуется ввести старый пинкод и новый
// Создать метод для проверки баланса
// Доп: создать поле для отслеживания попытек неудачный смен пинкода


// 2. Наследование (Inheritance)

// class Product {
//     constructor(name, price, weight, downloadLink) {
//         this.name = name
//         this.price = price
//         this.weight = weight
//         this.downloadLink = downloadLink
//     }
// }

// class Product {
//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }

//     showProductInfo() {
//         console.log(`Название продукта: ${this.name}. Цена: ${this.price}`)
//     }
// }

// class PhysicalProduct extends Product {
//     constructor(name, price, weight) {
//         super(name, price) // ссылаемся на constructor родительского класса
//         this.weight = weight
//     }
// }

// class DigitalProduct extends Product {
//      constructor(name, price, downloadLink) {
//         super(name, price) // ссылаемся на constructor родительского класса
//         this.downloadLink = downloadLink
//     }
// }

// const charger = new PhysicalProduct('Charger Xiaomi', 10_000, 2.3)
// const subscriptionToSpotify = new DigitalProduct('Spotify Subscription', 2_500, 'https://download.spotify-subs.com')

// console.log(charger)
// console.log(subscriptionToSpotify)

// charger.showProductInfo()
// subscriptionToSpotify.showProductInfo()


// Задание: IT-отдел

// Создать базовый класс Employee -> name, baseSalary -> showInfo()
// Создать класс Developer, который наследует Employee -> name, baseSalary, programmingLanguage
// Создать класс Manager, который наследует Employee -> name, baseSalary, salaryBonus


// 3. Полиморфизм (Polymorphism)
class Employee {
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    showInfo() {
        return `Сотрудник: ${this.name}. Базовая зарплата: ${this.baseSalary}.`
    }
}

class Developer extends Employee {
    constructor(name, baseSalary, programmingLanguage) {
        super(name, baseSalary);
        this.programmingLanguage = programmingLanguage;
    }

    showInfo() {
        return super.showInfo() + " " + `Язык программирования: ${this.programmingLanguage}`
    }
}

class Manager extends Employee {
    constructor(name, baseSalary, salaryBonus) {
        super(name, baseSalary);
        this.salaryBonus = salaryBonus;
    }

    // Перезаписать метод showInfo() указав доп строку Зарплата с бонусами: salary + bonus
    showInfo() {
        return super.showInfo() + " " + `Зарплата с бонусами: ${this.baseSalary + this.salaryBonus}`
    }
}

const dev = new Developer('Алексей', 500_000, 'JavaScript');
const man = new Manager('Мария', 700_000, 100_000);

console.log(dev.showInfo());
console.log(man.showInfo());

console.log(dev);
console.log(man);