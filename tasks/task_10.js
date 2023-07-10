// Question
// Use the "for...of" loop for iterable objects
// Create an iterable object, such as an array or string.
// Use a "for...of" loop to iterate over the elements of the object and perform actions based on each element.

// Created an iterable Object of an Array
const numArray = [1, 2, 3, 4, 5]
for (const element of numArray) {
  console.log(element * 2)
}

// Created an iterable Object of a String
const strChar = 'Good Morning'
for (const char of strChar) {
  console.log(char)
}
