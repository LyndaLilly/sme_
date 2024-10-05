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

// let str = "the quick brown fox jumps over The lazy dog."

// let matches = str.match(/the/gi)

// console.log(matches)

// let str = "Hello world! This is a test string"


// let regex = /[a-zA-Z]+/g

// let match = str.matchAll(regex)

// for (let m of match){
//     console.log(m)
// }

// let str = "The quick brown fox jumps over the lazy dog"

// let pattern = /brown/

// let res = str.search(pattern)

// console.log(res)

// let str = "Heloo, World"

// let newStr = str.replace(/o/g, "a")

// let allStr = str.replaceAll("o", "s")

// console.log(allStr)

// console.log(str.replace("o", "l"))

// let str = "red, blue, black"

// let arr = str.split(/,/)
// console.log(arr)

// let str1 = 'Smile please 😊'.match(/[😂😒😘]/)

// let str1 = 'Smile please 😊'.match(/[😂😒😊]/u)

// console.log(str1)

// let str = "Mountain"

// console.log(/^M/.test(str))

// console.log(/n$/.test(str))

// let isValid = /^\d\d:\d\d$/.test('10:01')

// console.log(isValid)

// let str = `1st line
// 2nd line
// 3rd line`

// console.log(str)

// let res = /^\d/

// let matches = str.match(res)

// console.log(matches)

// let pattern = /\bword\b/

// let pattern2 = /word/

// console.log(pattern.test("This is a word."))
// console.log(pattern.test("This is wording."))
// console.log(pattern2.test("This is wording"))

// let txt = "This is a browning fox"

// // let pattern = /\bbrown\b/
// // let res = txt.search(pattern)

// // console.log(res)

// let text = "Hello world"

// // let pat = /Hello/

// let rest = text.match(/Hello/)

// console.log(rest)

// let pattern = /hi/gi
// let str = "hi, there, Hi again"

// let res = str.match(pattern)

// console.log(res)

// let txt1 = 'Smile Please 😊'.match(/[😘😒😂]/u)


// console.log(txt1)

// ^, anchor
// let str = "Mango"

// console.log(/^M/.test(str))
// console.log(/o$/.test(str))

// let num = /^\d\d:\d\d$/.test('s0:01')

// console.log(num)

// let multi = `1st Line
// 2nd Line 
// 3rd Line`

// let pat = /^\d/gm

// console.log(multi.match(pat))

// console.log(multi)

// let sentence = "When candales are all out all cats are grey"

// let pattern = /cand/

// console.log(sentence.match(pattern))

// let pat1 = /\bword\b/
// let pat2 = /word/

// console.log(pat2.test("This is a word"))
// console.log(pat2.test("This is a wording"))
// console.log(pat1.test('This is a wor'))


// let str = 'Year: 2024'

// let res = /\d{4}/

// console.log(str.match(res))

// let str = "The meeting is scheduled for 11:00 AM and ends 55555 at 2 PM"

// let res = /\d{2,4}/g

// console.log(str.match(res))

// const password = "Password@12";
// const email = "12gmail.com";

// if (validatePassword(password)) {
//     console.log("Password is valid");
// } else {
//     console.log("Password is invalid");
// }

// if (validateEmail(email)) {
//     console.log("Email is valid");
// } else {
//     console.log("Email is invalid");
// }


// function validatePassword(password) {
//     const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,10}$/;
//     return passwordRegex.test(password);
// }

// function validateEmail(email) {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email);
// }


// let str = "The quick brown fox jumps over the lazy dog"
// let res = /[aeiou]/

// console.log(str.match(res))

let str = 'The cat chased the rats in the backyard'

let res = /[cr]at/g

console.log(str.match(res))

let sent = "Hello world"

let matches = /[^a-z]/g

console.log(sent.match(matches))