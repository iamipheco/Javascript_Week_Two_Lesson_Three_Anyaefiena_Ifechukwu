// Question
// Use nested loops
// Create a nested loop structure to generate a multiplication table.
// Use two "for" loops to iterate over values from 1 to 10 and calculate the product of each combination.

// Using the for() loop
for (let i = 0; i <= 10; i++) {
  for (let x = 0; x <= 10; x++) {
    const output = i * x
    if (output) {
      console.log(`${i} * ${x} = ${output}`)
    }
  }
}
