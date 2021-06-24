let birthYr = prompt("Please enter the year of your birth.");

let birthMnth = prompt("Please enter the numerical month of your birth.");

const dateObj = new Date();
const currentDateMnth = dateObj.getMonth() + 1;
const yearObj = new Date();
let currentDateYr = yearObj.getFullYear();
console.log(currentDateYr)
console.log(currentDateMnth)

if (currentDateMnth < birthMnth) {
    currentDateYr = currentDateYr - 1
}

let secsInaMonth = 60 * 60 * 24 * 30;

let secsInaYear = secsInaMonth * 12;


let secsInBrthYear = (12 - birthMnth) * secsInaMonth;

let ageInYrs = currentDateYr - birthYr;

let currentYearInSecs = ageInYrs * secsInaYear 

let currentMnthInSecs = currentDateMnth * secsInaMonth

let sum = currentMnthInSecs + currentYearInSecs + secsInBrthYear;


document.write("You are approximately " + sum + " seconds old since birth!")
