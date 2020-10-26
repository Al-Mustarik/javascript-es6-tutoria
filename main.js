// //constructor way
// // new keyword to declare object

// const myObj = new Object();

// const programming = {
//     first: "Javascript",
//     second: "php",
//     third: "python",
//     common: ['Html', 'css', 'basic javascript'],
//     choosenLanguage: function(){
//         return `My first priority-${this.first}. My second priority-${this.second}`;
//     }
// }
// console.log(programming.first);
// console.log(programming.second);
// console.log(programming.choosenLanguage());

function bio({firstName,lastName,choosenLang}){
    return{
        firstName, //if property and value name both are similar then we don't need to assign
        lastName: lastName,
        common: ['Html', 'css', 'basic javascript'],
        choosenLanguage(){
            return `My first name- ${this.firstName}. My last name- ${this.lastName} and I prefer ${choosenLang}`;
        }
    }
}

const myBio = bio({
    firstName: 'Al',
    lastName: 'Mustarik',
    choosenLang: 'Javascript'
});
console.log(myBio.firstName);
console.log(myBio.lastName);
console.log(myBio.choosenLanguage());