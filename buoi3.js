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

var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
  
  

