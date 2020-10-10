// 19 : Prototype
function Person(name , age){
    this.name = name;
    this.age = age;
    this.setName = function(name){
        this.name = name
    }
}

Person.prototype.getInFo = function(){
    return this
}
const teo = new Person("Nguyen Van Teo",20);
const ti = new Person("Nguyen Van Ti",20);
console.log(Person.prototype)