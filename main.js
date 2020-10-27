//Generator Function

//Gice capablity to pause and resume function
function myAjax(url){
    fetch(url)
    .then(data => data.json())
    .then(data => dataGen.next(data));
}

function *placeHolderData(){
    const post = yield myAjax('https://jsonplaceholder.typicode.com/posts/1');
    console.log(post);
    const comment = yield myAjax('https://jsonplaceholder.typicode.com/posts/1/comments');
    console.log(comment);
}

const dataGen = placeHolderData();
dataGen.next();