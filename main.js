// const myProfile = ["Al", "Mustarik", 26, "Data Scientist"];
//Spread operator
// const updatedProfile = [...myProfile ,"WEB Developer"]; //spread operator ... 
// console.log(updatedProfile);


// const gorceries = ["wheat", "banana"];
// const anotherGroceries = ["salt"];
// const updatedGroceries = [...gorceries, "milk", ...anotherGroceries];
// console.log(updatedGroceries);


// const firstName = "samim";
// const updatedName = [...firstName];
// console.log(updatedName);


//REST Operator
function myBio(firstName, age, ...values){ //Rest Operator
    return{
        firstName: firstName,
        age: age,
        rest: [...values, "jobless"] //Spread Operator
    };
}
console.log(myBio("Nahid", 25, "webdeveloper", "programmer"));
