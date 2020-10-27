const bio = {
    [Symbol('nahid')]: {firstName: 'nahid', age: 23},
    [Symbol('mustarik')]: {firstName: 'mustarik', age: 25}
}

//converting array
const symConv = Object.getOwnPropertySymbols(bio);

// const data = symConv.map(data => bio[data]);
// console.log(data[1].firstName);

for (const data of symConv){
    console.log(bio[data]);
}