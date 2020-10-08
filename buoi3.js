// 10 : Vòng lặp
// const arrNumbers1 = [1,2,3,4,5]
// const arrNumbers2 = [10,20,30]

// for (var i = 0 ; i < arrNumbers1.length ; i++){
//     for (var y = 0 ; y < arrNumbers2.length ; y++){
//         console.log(arrNumbers1[i] * arrNumbers2[y])
//     }
// }

// 11 : for of (Lấy giá trị trong mảng)
// const arrNames = ["Teo","Ti","Tun","Hoa"]
// for (const value of arrNames){
//     console.log(value)
// }

// Ví dụ
/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

// function multiply(arr) {
//     var result = 1
//     for (const value of arr){
//         result *= value
//     }
//     return result
// }

// console.log(multiply([2, 3, 4])); // expect: 24

// 12 : for in (Lấy key trong mảng)
// const arrNames = ["Teo","Ti","Tun","Hoa"]
// const teo = {
//     name : "Nguyen Van Teo",
//     age : 20
// }
// for (var key in teo){
//     console.log(key)
// }

/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

// var apartment = {
//     bedroom: {
//       area: 20,
//       bed: {
//         type: 'twin-bed',
//         price: 100
//       }
//     }
// };

// function getKey(obj){
//     for (const key in obj){
//         console.log(key)
//         if(typeof obj[key] === "object"){
//             getKey(obj[key])
//         }
//     }
// }
// getKey(apartment)

// 13 : Array method
// const arrNums = [5,1,10,20,30]
// Them phần tử vào cuối mảng
// arrNums.push(40)
// Xóa phần tử ở cuối
// arrNums.pop()
// Thêm phần tử đầu mảng
// arrNums.unshift(0)
// Xóa phần tử đầu mảng
// arrNums.shift()
// Xóa phần tử ở giữa
// arrNums.splice(1 , 3)
// Thêm phần tử ở giữa
// arrNums.splice(-1 , 0 , 50)

// console.log(arrNums)
  
// 14 : Callback là tham số

// function tinhTong(a , b){
//     return a + b
// }

// function inThongTin(cb){
//     console.log(cb)
// }

// inThongTin(tinhTong(10 , 5))

// Vong lap 1 .. 100
// In số chẳn
// In số lẻ
// In số chia 3 dư 1
// In số chính phương

// function insoChan(){
//     for (var i = 1 ; i <= 100 ; i++){
//         if (i % 2 === 0){
//             console.log(i)
//         }
//     }
// }
// function insoLe(){
//     for (var i = 1 ; i <= 100 ; i++){
//         if (i % 2 === 1){
//             console.log(i)
//         }
//     }
// }


// function insoChia3Du1(){
//     for (var i = 1 ; i <= 100 ; i++){
//         if (i % 3 === 1){
//             console.log(i)
//         }
//     }
// }

// function insoChinhPhuong(){
//     for (var i = 1 ; i <= 100 ; i++){
//         if (Math.sqrt(i) % 1 === 0){
//             console.log(i)
//         }
//     }
// }

// function inSo(cb){
//     for (var i = 1 ; i <= 100 ; i++){
//         const dk = cb(i)
//         if (dk) console.log(i)
//     }
// }
// inSo(function(i){
//     return Math.sqrt(i) % 1 == 0
// })
// insoChan()
// insoLe()
// insoChia3Du1()
// insoChinhPhuong()

