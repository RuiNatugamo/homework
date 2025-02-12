const user = {
    max: {
        name: 'Max',
        age: 18,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}

console.log(user.max)
user.max.sayHello('Max')


const users = { 
    john: {
        name: 'John',
        isAdmin: true,
        status: 'admin'
    },
    ann: {
        name: 'Ann',
        isAdmin: false,
        status: 'user'
    },
    alex: {
        name: 'Alex',
        isAdmin: false,
        status: 'user'
    }
}