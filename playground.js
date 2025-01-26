const arr = [1, -1, 2, 3];

const sum = arr.reduce((accumulator, currentValue ) => {
return accumulator + currentValue
}, 0)

//if the 0 default number isn't set, 
// the accumulator will default to the 1st value, 
// and the current vaule  will be equal to the 2nd value

console.log(sum)