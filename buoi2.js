//4 : Array
// const arrNames = ["Teo","Ti","Tun","Tuan"]
// console.log(arrNames[0]) // truy cập thông thường

// const teo = {
//     name : "Nguyen Van Teo"
// }
// console.log(teo["name"])

// 5 : Arithmetic Operators :
// Toán tử , toán hạng
var a = 5
var b = 5
var ketqua = a++ - --b + a++ - b++ + --a - b-- + a--
// 5 - --b + a++ - b++ + --a - b-- + a--  a = 6 , b = 5
// 5 - 4 + a++ - b++ + --a - b-- + a--  a = 6 , b = 4
// 5 -  4 + 6 - b++ + --a - b-- + a--   a = 7 , b = 5
// 5 -  4 + 6 - 5 + --a - b-- + a--   a = 7 , b = 6
// 5 -  4 + 6 - 5 + 6 - b-- + a--   a = 6 , b = 6
// 5 -  4 + 6 - 5 + 6 - 6 + a--   a = 6 , b = 5
// 5 -  4 + 6 - 5 + 6 - 6 + 6  a = 6, b = 5
// 1 + 1 + + 6 = 8
// ket qua ? 6 , 8