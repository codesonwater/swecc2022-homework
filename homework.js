/* HW - winter cohort: week 1 day 2
Homework will help you practice loops, arrays, objects, and functions.

1. Create a function that returns the number of true values there are in an array.
*/

const testArray = [
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
];

//Step 1) Q. How do I count the number of true or false values? aka traverse the array - A. loop
//Step 2) Declare a count
//Step 3) Check value a index is true

//Don't forget i is short for index

function countTrues(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      count++;
    }
    //    let count = 0    <-- DONT put the count function INSIDE the loop brackets
  }
  return count;
}

console.log("There are", countTrues(testArray), "Trues in this array");

//2. Write a function that receives a car object as an argument and outputs the car's make and model.



//3. Write a function to get the first element in an array
