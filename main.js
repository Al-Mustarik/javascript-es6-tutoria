//Syntactic sugar

//class

class Person{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.lang = [];
        console.log("running...");
    }
    //method
    getBio(){
        return `${this.name} age- ${this.age} choosenLang- ${this.lang.join(',')}`;
    }
    setLang(lang){
        this.lang.push(lang);
    }
}

//object 
const obj1 = new Person('nahid', 23);
console.log(obj1.getBio());
obj1.setLang('javascript');
console.log(obj1.getBio());