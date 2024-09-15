// const reg = /pattern/

// const ab = /ab+c/

// const ac = new RegExp("pattern")

// const ad = new RegExp("ab+c")

//simple pattern  /abc/
//special characters /ab*c/ matches ac, abc, abbc

// RegExp.methosname(string)

// RegExp.test("string")
// RegExp.match("string")

// word = "Hello world"

// console.log(word.replace("H", "W"))

// string.replace()

// let pattern = /hello/
// let str = "hello world"

// let res = pattern.test(str)

// console.log(res)

// let pattern = /world/

// let str = "hello world"

// let res = pattern.exec(str)
// console.log(res)

let str = "the quick brown fox jumps over the lazy dog."

let matches = str.match(/the/g)

console.log(matches)

