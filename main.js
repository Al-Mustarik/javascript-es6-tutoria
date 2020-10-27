//Syntactic sugar

//class

class Programmer{
    //constructor
    //property
    constructor(firstName, age){
        this.firstName = firstName; //field
        this.age = age;
        this.lang = [];
        console.log('Running ...')
    }

    // getfirstName(){
    //     return this.firstName;
    // }

    getBio(){
        return `${this.firstName} - ${this.age} - ${this.lang}`;
    }

    static salary(){
        console.log("My salary $0");
    }

    //property
    get nickName(){
        return this.firstName;
    }

    set nickName(value){
        this.firstName = value.toUpperCase();
    }
    
    set mainLang(lang){
        this.lang.push(lang);
    }

}

class specialProgrammer extends Programmer{

    constructor(firstName, age, specialLang){
        super(firstName, age) ;
        this.specialLang = specialLang ;
    }

    getBio(){
        return  `${super.getBio()} ${this.specialLang}` ;
    }

    get specialLng(){
        return this.specialLang;
    }
    set mainLang(lang){
        return this.lang.push(lang);
    }
}


//object 
const obj1 = new Programmer("nahid", 26);
const obj2 = new specialProgrammer("mustarik", 26, 'golang');