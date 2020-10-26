const firstName = 'Al';
const lastName = 'Mustarik';
const age = 25 ;
const profession = 'Data Scientist';

// function myBio(){
//     return 'my name is ' + firstName +' '+ lastName + 'and I am ' + age + 'years old ' + 'and I am a professional ' + profession ;
// }

// function myBio(){
//     return `My name is ${firstName.toUpperCase()} ${lastName.toUpperCase()} and my age is ${age -1} years old and I'm a professional ${profession}`;
// }

// console.log(myBio());

const html = `

    <h1>Header</h1>
    <p> I am a paragraph </p>
    <p>My name is ${firstName.toUpperCase()} ${lastName.toUpperCase()} 
    and my age is ${age -1} years old and I'm a professional ${profession}</p>

`;

document.body.innerHTML = html;