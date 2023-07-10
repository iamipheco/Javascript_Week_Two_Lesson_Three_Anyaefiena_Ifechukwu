// Question
// Use a "for...in" loop to iterate over an object
// Create an object with key-value pairs representing personal information (name, age, city, etc.).
// Use a "for...in" loop to iterate over the object and log each key-value pair to the console.

const myPersonalinfo = {
  name: 'Ipheco Chris',
  age: 30,
  city: 'Awka',
  occupation: 'Web Designer'
}

for (const key in myPersonalinfo) {
  console.log(key + ': ' + myPersonalinfo[key])
}
