//Fetch API
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(data => data.json())
// .then(data => console.log(data))
// .catch(e => console.log(e));

//Behind the scene working with Promise

// function logData(data){
    
//     setTimeout(() => {
//         console.log(1);
//         setTimeout(() => {
//             console.log(2);
//         },2000);
//     },2000);   
// }

// logData();

const logDataP = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Error('This is error'));
        },2000 );
    })
    
logDataP.then(data => {
    console.log(data);
}).catch(e => console.log(e));
