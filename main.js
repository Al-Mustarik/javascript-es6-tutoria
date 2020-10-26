//array destructuring


// const myProfile = ["Al", "Mustarik", 23, "Data Scientist"];
// const [, , age,profession] = myProfile;
// console.log(profession);


//Object destructuring


const post = {
    id: 1,
    title: "sample title",
    body: "sample body",
    allowComments: true,
    share:{
        facebook: true,
        twitter: true,
        linkdid: false
    }
};

// const {title, allowComments} = post;
const {facebook} = post.share;
console.log(facebook);