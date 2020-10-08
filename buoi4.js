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

// function findDivisibleNum(array, x) {
//   // viết code ở đây.
//    const result = array.find(function(num){
//        if(num % x == 0) return num
//    })
//    console.log(result)
// }
// findDivisibleNum([1, 3, 4], 5)

// Ví dụ
/* Filter các sản phẩm khi biết id danh mục sản phẩm
  Ví dụ đây là 1 danh sách các danh mục sản phẩm, 
  khi người dùng muốn lọc các sản phẩm thuộc danh mục nào 
  thì filter các sản phẩm của danh mục đó.
  var categories = [
    { id: 1, name: 'Đồ điện tử'},
    { id: 2, name: 'Đồ gia dụng'},
    { id: 3, name: 'Nội thất'}
  ];
*/

// var listProducts = [
//  {id: 1, categoryId: 1, name: 'Tivi'},
//  {id: 2, categoryId: 1, name: 'Tủ lạnh'},
//  {id: 3, categoryId: 3, name: 'Ghế sofa'},
//  {id: 4, categoryId: 1, name: 'Máy giặt'},
//  {id: 5, categoryId: 2, name: 'Chén bát'},
//  {id: 6, categoryId: 2, name: 'Nồi cơm điện'},
//  {id: 7, categoryId: 3, name: 'Cửa kính'},
//  {id: 8, categoryId: 1, name: 'Điều hoà'},
//  {id: 9, categoryId: 3, name: 'Bàn tròn'},
//  {id: 10, categoryId: 2, name: 'Lò vi sóng'},
// ]

// function filterProductsByCategoryId(products, categoryId) {
//   return products.filter(function(product){
//     if(product.categoryId === categoryId){
//         return true
//     }
//     return false
//   }).map(function(product){
//         // delete product.categoryId
//         return {id : product.id , name : product.name}
//   })
// }
// console.log(filterProductsByCategoryId(listProducts,2))

// 17 : Hàm reduce
// const arrNumbers = [5,2,10,20,11,15]
// const result = arrNumbers.reduce(function(accumulator , currentValue){
//     console.log("Accumlator " + accumulator );
//     console.log("CurrentValue " + currentValue );
//     return accumulator + currentValue
// }, 0 )
// console.log(result)

// Trả về số lượng người đã vote
// function totalVotes(arr) {
//     const result = arr.reduce(function(accumulator , currentValue){
//         if(currentValue.voted){
//             accumulator += 1
//         }
//         return accumulator
//     },0)
//     return result
// }

// var voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];
// console.log(totalVotes(voters)) // 7

// function countOccurrences(arr) {
//     const result = arr.reduce(function(accumulator , currentValue){
//         if (currentValue in accumulator){
//             accumulator[currentValue]++
//         }else{
//             accumulator[currentValue] = 1
//         }
//         return accumulator
//     },{})
//     console.log(result)
// }
// countOccurrences(["a", "b", "c", "b", "a", "a"]); // {a : 3 , b : 2 , c}

// const teo = {name : "Nguyen Van teo"}
// teo["age"] = 20
// teo["age"]++
// console.log(teo)


// 18 : Hàm sort

// const numbers= ["Teo","ATuan","Ba","Ca","Da"]
// const newNumbes = numbers.sort()
// console.log(newNumbes)
