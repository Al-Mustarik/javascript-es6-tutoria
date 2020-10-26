//for loop

const lang = ['html', 'css', 'js'];

//simple for loop
// for(let i=0; i < lang.length; i++){
//     if(lang[i] === 'css'){
//         continue;
//     }
//     console.log(lang[i]);
// }

//forEach loop

// lang.forEach((eachlang,i) => { //continue or break don't work
//     // if (eachlang === 'css'){
//     //     continue;
//     // }
//     console.log(i, eachlang);
// })


//forin loop (resulting Index)
// const obj = {
//     firstName: 'Al',
//     lastName: 'Mustarik'
// }

//Array Prototype
// Array.prototype.myFunc = () => { //Access Prototype
//     console.log('Hello...');
// }
// lang.last = 'Python';

// for (const name in lang) {
//     // console.log(name);
//     console.log(lang[name]);
// }


//for of loop

for (let [i, myLang] of lang.entries()){ //not looping object
    if (myLang === 'css'){
        continue;
    }
    console.log(i, myLang);
}