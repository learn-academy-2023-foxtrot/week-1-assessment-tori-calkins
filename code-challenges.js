// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// Pseudo code:
// function name: number
// input: number
// output: The output will give a string with one of these strings "boiling point", "at boiling point", or "above boiling point" depending on the number given.
//proccess: conditional statements will be used to determine if each statment is true or false and execute the proper string.

//attempt one:
const number = (num) => {
    if (num <= 42 ) {
        return(`${temperature1} is below boiling point`)
    } else if (num >= 350) {
        return(`${temperature2} is above boiling point`)
    } else if (num === 212) {
        return(`${temperature3} is at boiling point`)
    } else {
        return "error"
    }
}
console.log(number(temperature1))
console.log(number(temperature2))
console.log(number(temperature3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// function name: padresCombo
// input: none
// output: the combined arrays length 
// process: .length and concat built in methods to combine the arrays and also get the length index number to appear in the console.
var padresCombo = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(padresCombo.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Foxtrot 2023"
// Expected output: "3202 tortxoF"

// Pseudo code:
// input: none
// output: the output will be the value of the <currentCohort> backwards in the console
// proccess: .split, .reverse, and .join built in methods

// written out step I took to build up to final answer:
// console.log(currentCohort.split(""))
// console.log(currentCohort.split("").reverse())

console.log(currentCohort.split("").reverse().join(""))

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// Pseudo code:
// input: none
// output: the output is going to be the number of the index of the value number provided
// process: .indexOf will be used to show the index number of the wanted value


// console.log(numberOfConnections.indexOf(givenValue1))
// console.log(numberOfConnections.indexOf(givenValue2)) 
// output = 2, 5 

// I knew at first the .indexOf would give me the index number of the values but then I realized it gave me the first set of the index numbers and not the last set so I had a feeling there was a built-in method to help achieve my goal so I did some trial and error with the built-in methods.

console.log(numberOfConnections.lastIndexOf(givenValue1))
console.log(numberOfConnections.lastIndexOf(givenValue2))

