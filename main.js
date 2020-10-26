// const firstName = 'Al';
// const lastName = 'Mustarik';
// const age = 25 ;
// const profession = 'Data Scientist';

// // function myBio(){
// //     return 'my name is ' + firstName +' '+ lastName + 'and I am ' + age + 'years old ' + 'and I am a professional ' + profession ;
// // }

// // function myBio(){
//     // TEMPLATE STRING
// //     return `My name is ${firstName.toUpperCase()} ${lastName.toUpperCase()} and my age is ${age -1} years old and I'm a professional ${profession}`;
// // }

// // console.log(myBio());

// // TEMPLATE TAGGING

// function modify(strings, ...values ){
//     // console.log(strings, values);
//     let str = "";
//     strings.forEach(function(string, i){
//         str += `${string} <b> ${values[i] || "" } </b>`;
//     })
//     return str;
// }

// const html = modify`

//     <h1>Header</h1>
//     <p> I am a paragraph </p>
//     <p>My name is ${firstName.toUpperCase()} ${lastName.toUpperCase()} 
//     and my age is ${age -1} years old and I'm a professional ${profession}</p>

// `;

// document.body.innerHTML = html;

//number function
//Function statement
// function add(num1, num2){
//     return num1 + num2 ;
// }


//Function expression
//Arrow Function
// const add = num2 => 2 + num2;
// console.log(add(2));

// const selfInfo = {
//     firstName: "Nahid",
//     age: 23,
//     myBio: function(){
//         console.log(this);
//         return `I am ${this.firstName} and my age is ${this.age}`;
//     }

// };
// console.log(selfInfo.myBio());

const marks = [80, 95, 78, 85];
// const multiple = marks.map((mark, i) => 
//     {
//         console.log(i);
//         return mark * 2 ;
//     });
// console.log(multiple);
// console.log(marks)
let multiple = [];
marks.forEach(mark =>
    {
        multiple.push(mark * 2 ) ;
    });
console.log(multiple);