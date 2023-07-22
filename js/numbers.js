//converts string numbers to intergers
const num1 = '12'
console.log(Number(num1))

//checking if a data is a number
const data = 'string'
console.log(isNaN(data))
const data_2 = 15
console.log(isNaN(data_2))

//checking if a number is an integer
const number = 12;
const my_float = 15.4548756
const str  ="string"
console.log(Number.isInteger(number))
console.log(Number.isInteger(my_float))
console.log(Number.isInteger(str))

//changing an integer to a floating point number
console.log(Number.parseFloat(number))
console.log(Number.parseFloat(number).toFixed(4))

//removes decimals to the fixed numbers
console.log(my_float.toFixed(2))

// toString() method returns a string representing the number
console.log(number.toString())