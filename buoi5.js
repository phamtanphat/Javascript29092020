// 19 : Prototype
// function Person(name , age){
//     this.name = name;
//     this.age = age;
//     this.setName = function(name){
//         this.name = name
//     }
// }

// Person.prototype.getInFo = function (){
//     return this
// }
// const teo = new Person("Nguyen Van Teo",20);
// const ti = new Person("Nguyen Van Ti",20);
// console.log(Person.prototype)

// 20 : function scope
// var a = 1
// function random(){
//   var a = Math.random()
//   console.log(a)
// }
// random()
// console.log(a)

// 21 : var let const
// nen su dung let de tranh : Redeclaration , Hoisting , Block scope 

// 22 : function context va bind

// const teo = {
//     name : "Nguyen Van Teo",
//     age : 20,
//     showInfo : function(){
//         console.log("Name : " + this.name + " , Age : " + this.age);
//     }
// }

// const coppy = teo.showInfo.bind(teo)
// coppy()

// function run(cb) {
//     console.log('run...')
//     cb()
// }

// const mouse = {
//     name: 'Mickey',
//     run: function () {
//         console.log(this.name + ' is running')
//     }
// }

// run(mouse.run.bind(mouse))

// 23 : Arrow funtion
// const arrNums = [2,1,5,10,20,15]
// const newArrNums = arrNums.map(function(value){
//     return value * 2
// })
// const newArrNums = arrNums.map((value) => {
//     return value * 2
// }) 
// console.log(newArrNums)

// var a = {
//     name : 'AAA',
//     run : function(){
//         var run2 = () => {
//             var run3 = () => {
//                 console.log(this.name)
//             }   
//             run3()
//         }
//         run2()
//     }   
// }
// a.run()

// function Person(){
//     this.age = 0;
  
//     setInterval(() => {
//       this.age++; // |this| ở đây trỏ tới đối tượng person
//       console.log(this.age)
//     }, 1000);
// }
  
// var p = new Person();


  

  


