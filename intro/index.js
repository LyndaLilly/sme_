// class Student{
//     names = "Smith"
//     age = 67
//     email = "smith@gmail.com"

//     study(){
// //anything
//     }

//     go(){
//         //some
//     }
// }


// let person = {
//     name : "Ada",
//     age: 40,
//     greet: function(){
//         console.log("hello")
//     }
// }

// function hello(){
//     return "Good morning"
// }

// hello()


// nums = [1, 2, 3, 4, 5]

// newNum = nums.map((item)=>{
//     return item * 2
// })

// console.log(newNum)

// function Staff(name,age){
//     this.name = name
//     this.age = age

//     this.getFullDetails = ()=>{
//         return `My name is ${this.name} and I am ${this.age} years old`
//     }

// }

// let charles = new Staff("Charles", 40)
// let Lynda = new Staff("Lynda", 89)

// console.log(charles.getFullDetails())
// console.log(Lynda.getFullDetails())

// function User(names){
//     this.names = names

//     console.log(this)
// }

// User.prototype.printname = function(){
//     console.log(this.names)
// }

// let newUser = new User("Lynda")

// let Dennis = new User("Dennis")
// Dennis.printname()

// console.log(User.__proto__)

// console.log(newUser .__proto__ === User.prototype)

// console.log(User.prototype.isPrototypeOf(newUser))

// const arr = [1, 2, 3, 4, 4, 5]

// const numbers = ["red", "blue", "green"]

// arNums = [2, 4, 6, 8, 10]

// Array.prototype.unique = function(){
//     return [...new Set(this)]
// }

// Array.prototype.squares = function(){
//     return this.map((item)=>{
//         return item * 2
//     })
// }

// console.log(arNums.squares())



// // console.log(arr.unique())
// // console.log(numbers.unique())



// class Users{
//     constructor(firstName){
//         this.firstName = firstName
//     }

//     printName(){
//         console.log(this.firstName)
//     }
// }





// const Ebere = new Users("Ebere")

// console.log(Ebere)

// class User{
//     constructor(names){
//         this.names = names
//     }

//     get getName(){
//         console.log(this.names)
//     }

//     set setName(newName){
//         this.names = newName
//     }
// }


// const Ebere = new User("Ebere")

// Ebere.setName = "Dennis"
// Ebere.getName

// class User{
//     constructor(names){
//         this.names = names
//     }

//    static anons(){
//     console.log("anonymous")
//    }
// }

// const Ebere = new User("Ebere")

// User.anons()

// class Staff{
//     constructor(name){
//         this._name = name
//     }

//     get getNames(){
//         console.log(this._name)
//     }

//     set setNames(anyName){
//         this._name = anyName
//     }
// }

// const Offor = new Staff("Offor")

// Offor.setNames = "Chike"
// Offor.getNames

// class Fruits{
//     constructor(types){
//         this._types = types
//     }

//     static apple(){
//         console.log("Mango")
//     }
// }

// const Apple = new Fruits("Apple")

// Fruits.apple()


// class User = {
//     init(name){
//         this.name = name
//     },

//     printName(){
//         console.log(this.name)
//     }
// }

// let newObj = Object.create(User)
// newObj.init("Kenneth")

// newObj.printName()

// class User{
//     constructor(name, age){
//         this._name = name
//         this._age = age
//     }
// }

// const newUser = new User("Abby", 23)
// console.log(newUser._age)
// console.log(newUser._name)


class User{
    #name
    constructor(name, age){
        this.#name = name
        this._age = age
    }

   #printName(){
    console.log(this.#name)
   }

   printAge(){
    console.log(this._age)
   }

   printNamePrivate(){
    this.#printName()
   }
}

const newUser = new User("Abby", 23)
// newUser.printNamePrivate()
newUser.printAge()