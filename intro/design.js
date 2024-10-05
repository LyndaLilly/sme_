//three categories of design pattern

/**
 * creational -> singleton pattern
 * structural
 * behavioral
 * 
 */

// const Config = {
//     start: () => console.log('My Design has started'),
//     updated : () => console.log('My Design has updated')
// }

// // Object.freeze(Config)

// Config.start()
// Config.updated()
// Config.username = "Adam"
// console.log(Config)


// class Config{
//     constructor() {}
//         start(){console.log("My design has started")}

//         updated(){console.log('My design has updated')}
    
// }

// const res = new Config()
// // Object.freeze(res)

// console.log(res)

var instance = {}

var instance = Object.create(Object.prototype)

var instance = new Object()

//Es3
instance.key = "A key's value"
instance["key"] = "This is a key"

//Es5
Object.defineProperty(instance, "key",{
    value: "This is a value"
})

Object.defineProperties(instance,{
    "key1":{
        value: "This is first value"
    },

    "key2" :{
        value: "This is second value"
    }
})

// function Student(name, age, email){
//     this.name = name
//     this.age = age
//     this.email = email

//     this.getName = () =>{
//         return `My name is ${this.name}`
//     }

//     this.getDetails = () =>{
//         return `My name is ${this.name} and I am ${this.age} years old and finally my email is ${this.email}`
//     }
// }


// let Obinna = new Student("Obinna", 40, "obinna@gmail.com")

// let Ada = new Student("Ada", 30, "ada@gmail.com")

// console.log(Obinna.getDetails())
// console.log(Ada.getName())


let counts = (function(){
    let counter = 0

    return function(){
        return ++counter
    }
})()


console.log(counts())
console.log(counts())
console.log(counts())


// let number = '+1-(103)-777-0101'

// let pattern = /\d/g

// let res = number.match(pattern)
// let res2 = res.join('')

// console.log(res2)

let str = '12 of the musketeers'

let pat = /\w\d/

console.log(str.match(pat))

let post = 'post/123'

const pattern = /\w+\/(\d+)/

console.log(post.match(pattern))

function formatPhone(phone){
    const regex = /(\d{3})(\d{3})(\d{4})/
    return phone.replace(regex, "($1) $2-$3")
}

// const res = formatPhone("09058826810")

// console.log(res)



const Fruits = {
    apple: () => console.log("apple is sweet"),
    mango: () => console.log("mango is green")
}

Fruits.apple()
// let res = Fruits.mango = "Red"
Fruits.guava = "Guava is green and red"
console.log(Fruits)

// console.log(res)

const Person ={
    names: "Ada",
    age : 34
}
Person.email = "ada@email.com"

console.log(Person)

class Colors {
    constructor() {}
    red(){ console.log("this a red color")}
    blue(){return `This is a blue color`}

}

let res = new Colors()
res.red()
let blue = res.blue()

console.log(blue)


class Staff{
    constructor(names, age){
        this.names = names
        this.age = age
    }
    smith = () => console.log("This is smith")
    ages = () => console.log(`This is ${this.age}`)

}

const newUser = new Staff("Smith", 40)

console.log(newUser.names)
console.log(newUser.age)
newUser.smith()

function Staffs(names, age){
    this.names = names
    this.age = age
}

Staffs.prototype.smith = () => console.log("This is me again")

const newStaff = new Staffs("Emeka", 50)

newStaff.smith()

const fruits = [
    {item : "Apple", amount: 4.6},
    {item : "Banana", amount : 5.4},
    {item: "Mango", amount : 3.2}
]

const newItems = {
    item : "Paw-paw",
    amount : 4000
}

const newFun = item =>{item.amount = parseFloat(item.amount/1000000).toFixed(1)}

newFun(newItems)

fruits.push(newItems)

console.log(fruits)

const maxNum = ()=>{
    return Math.max(...fruits.map(item => item.amount))
}

console.log(maxNum())