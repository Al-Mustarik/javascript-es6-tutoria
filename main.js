//Fetch API
fetch('https://jsonplaceholder.typicode.com/comments')
.then(data => data.json())
.then(data => console.log(data))
.catch(e => console.log(e));

//Behind the scene working with Promise