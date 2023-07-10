// Question
// Use array methods for iteration
// Create an array of names.
// Use array methods like forEach(), map(), or filter() to perform specific actions on the array elements.

// Created an Array of names
const names = ['Arinze', 'Chidubem', 'Chidimma', 'Deborah', 'Tochi']

// Using an array method of forEach()
names.forEach((name) => {
  console.log(name)
})

// Using an array method of map()
const nameLengths = names.map((name) => name.length)
console.log(nameLengths)

// Using an array method of filter()
const namesStartwithC = names.filter((name) => name.startsWith('C'))
console.log(namesStartwithC)
