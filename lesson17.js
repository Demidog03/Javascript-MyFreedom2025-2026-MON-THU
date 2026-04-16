// ASYNC/AWAIT, TRY/CATCH

// 1. then
// let todos = []

// fetch('http://localhost:6767/api/todos').then(response => {
//     return response.json()
// }).then(data => {
//     todos = data
// }).catch(error => {
//     console.log(error)
// }).finally(() => {
//     console.log('Завершился')
// })

// console.log(todos)


// 2. Async/Await
try {
    let todos = []

    await getTodosList()

    console.log(todos)
}
catch {
    console.error('Ошибка с getTodosList')
}


async function getTodosList() {
    try {
        const response = await fetch('http://localhost:6767/ap/todos')
        const data = await response.json()
        todos = data
    }
    catch (error) {
        console.error('Произошла ошибка в запросе')
    }
    finally {
        console.log('Запрос завершился')
    }
}



try {
    const text = 'Hello'
    text = 'Hi'
}
catch (error) {
    console.error(error)
}

console.log('Код дальше работает')