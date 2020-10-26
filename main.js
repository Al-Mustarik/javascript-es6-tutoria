//Working with function (destructuring mind)

function myBio({lastName, firstName, age, email, address}){
    return `${firstName} ${lastName} is ${age} years old recently i stay at ${address} and my email address is  ${email} `;
}

console.log(
    myBio({
    firstName: "Al",
    lastName: "Mustarik",
    age: 25,
    address: "22/C/2, Lake City",
    email: "mustarik.al@outlook.com"
    })
);


const comments = [
    {
        id: 10,
        body: "first comment"
    },
    {
        id: 2,
        body: "second comment"
    },
    {
        id: 4,
        body: "dump comment"
    },
    {
        id: 3,
        body: "correct comment"
    }
]

const badComment = comments.findIndex(comment => comment.id === 4);
console.log(badComment);
const choosenComment = [...comments.slice(0, badComment), ...comments.slice(badComment + 1)];
console.log(choosenComment)