//4 : Array
// const arrNames = ["Teo","Ti","Tun","Tuan"]
// console.log(arrNames[0]) // truy cập thông thường

// const teo = {
//     name : "Nguyen Van Teo"
// }
// console.log(teo["name"])

// 5 : Arithmetic Operators :
// Toán tử , toán hạng
// var a = 5
// var b = 5
// var ketqua = a++ - --b + a++ - b++ + --a - b-- + a--
// 5 - --b + a++ - b++ + --a - b-- + a--  a = 6 , b = 5
// 5 - 4 + a++ - b++ + --a - b-- + a--  a = 6 , b = 4
// 5 - 4 + 6 - b++ + --a - b-- + a--  a = 7, b = 4
// 5 - 4 + 6 - 4 + --a - b-- + a--  a = 7, b = 5
// 5 - 4 + 6 - 4 + 6 - b-- + a--  a = 6, b = 5
// 5 - 4 + 6 - 4 + 6 - 5 + a--  a = 6, b = 4
// 5 - 4 + 6 - 4 + 6 - 5 + 6  a = 6, b = 4
// 1 + 2 + 1 + 6 = 10
// console.log(ketqua)
// ket qua ? 6 , 8 , (10)

// 6 : function
// function doSth(action){
//     console.log("Thưc hiện : " + action)
//     return
// }
// console.log(doSth("Chạy bộ"))

// 7 : Object method
// const teo = {
//     name : "Nguyen Van Teo",
//     age : 10,
//     info : function (){
//         console.log("Tên : " + this.name + ". Tuổi : " + this.age);
//     }
// }
// teo.info()

// 8 : Các phép so sánh
// var a = 5
// var b = "25"
// console.log(a > b)
// var teo = {age : 10}
// var ti = {age : 10}
// console.log(teo == ti)

// console.log(5 < undefined)
// Not a number
// console.log(undefined + 1)
