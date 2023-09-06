// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 9 or 10
// b) Verify and explain: 10. I wasn't fully sure if the space was considered a full number in the .length, but it is indeed. The console logged 10 because "learn 2023" has a total of 10 characters including the space. 

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: In this case, we are using index and specifically asking for the 4th index within the string stating "Hello World!". o is that 4th index so the console logs that.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: Ruby. Index was identified as 1 and inside the console.log we asked "out of the elements in the language array, what is the element being held in the index of 1?", Ruby was the answer to that. 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: "TypeError: weekendDays.toUpperCase is not a function", I am not fully sure why this error appeared. I know that .toUpperCase() is a string function in JacaScript and in this case we are asking it to capitalize the strings in an array.   

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: "string"
// b) Verify and explain: "number", I am confused by this one. Each of the dataTypes are inside of "" which I thought makes them strings and then I am not sure why .length is being used in the situation either. 
