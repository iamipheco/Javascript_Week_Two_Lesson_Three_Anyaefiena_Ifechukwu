// Question
// Use the "continue" statement
// Create a loop that counts from 1 to 10.
// Use an "if" statement to check if the current iteration is divisible by 2.
// If the condition is true, use the "continue" statement to skip the current iteration and move to the next.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue
  }
  console.log(i)
}
