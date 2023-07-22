//Strings
const str = "Mathematics";

//length
console.log(str.length)

//getting the charater in the index provided
console.log(str.charAt(6))

//returns the index of the first occurence of the charater or string
console.log(str.indexOf("mat")) 

//returns the index of the last occurence of the charater or string
console.log(str.lastIndexOf("mat"))

//slice returns a section of a string from a certain starting position to a certain ending position
//the last index is not included
console.log(str.slice(0, 4))

//lowercase, uppercase, capitalization
console.log(str.toLowerCase())
console.log(str.toUpperCase())

//checking if the string includes a charater or a group of charaters. returns true or false
console.log(str.includes("div"))
console.log(str.includes("tics"))

//the split method splits the string where the charater occurs and returns an array
const letters = str.split("")
console.log(letters)

const sentence = "Initially, when I started, using Django as the backend,for creating rest API I, faced a lot of issues, but after googling, I came across multiple solutions"
const chuncks = sentence.split(",")
console.log(chuncks)

const sentence_two = "Initially, when I started using Django as the backend for creating rest API I faced a lot of issues, but after googling, I came across multiple solutions"
const words = sentence_two.split(" ")
console.log(words)