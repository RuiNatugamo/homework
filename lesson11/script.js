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


const users = [
    {
        name: 'Alex',
        age: 20,
        isAdmin: true
    },
    {
        name: 'Ann',
        age: 19,
        isAdmin: false
    },
    {
        name: 'John',
        age: 23,
        isAdmin: false
    },
]

let sumUsers = 0

for(i = 0; i < users.length; i++) {
    if(users[i].isAdmin === false) {
        sumUsers = sumUsers + 1
    } 
}

console.log(sumUsers)





