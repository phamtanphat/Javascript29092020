// 15 : Map method

// const arrNumbers = [5,2,10,20,11,15]

// 1 : Tạo ra mảng mới và không ghi đè mảng cũ
// 2 : Thay đổi giá trị trong từng phần tử và không thêm hoặc xóa phần tử

// const newArrNums = arrNumbers.map(function(value , index){
//     return value * 2
// })
// console.log(newArrNums)

// Ví dụ
// Make an array of strings of the names
// function namesOnly(arr) {
//     const newArr =  arr.map(function(person , index){
//         return person.name
//     })
//     console.log(newArr)
// }

// namesOnly([
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },
//   {
//     name: "Eric Jones",
//     age: 2
//   },
//   {
//     name: "Paris Hilton",
//     age: 5
//   },
//   {
//     name: "Kayne West",
//     age: 16
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100
//   }
// ])
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 16 : Hàm filter

// 1 : Tạo ra mảng mới và không ghi đè mảng cũ
// 2 : Thay đổi kích thước của mảng chứ không thay đổi giá trị của phần tử

// const arrNumbers = [5,2,10,20,11,15]
// const newArr = arrNumbers.filter(function(num , index){
//     if (index % 2 == 0){
//         return true
//     }
//     return false
// })
// console.log(newArr)

// Ví dụ:
// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
// function findFirstEvenNumber(array) {
// 	return array.find(function(value){
//         if(value % 2 == 0) return value
//     })
// }

// console.log(findFirstEvenNumber([1]))

// Ví dụ:
/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example: 
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

function findDivisibleNum(array, x) {
  // viết code ở đây.
  
}

