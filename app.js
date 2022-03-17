//LOOKING AT FILTER
//create an array with some numbers
const arrayNums = [1, 2, 3, 4, 5];
//create a function that will return 'true' when input meets a condition
const predicate = (number) => number % 2 === 0;

// WITHOUT FILTER
//declare an empty array to contain the final filtered data
const newarray = [];
//use a for loop to loop/go over each data
for (let i = 0; i < arrayNums.length; i++) {
    //test the data to see 'if' it meets the condition (if the variable is 'true')
  if (predicate(array[i])) {
      //if the data meets the condition then 'push' it into the new array
    newarray.push(array[i]);
  }
}

// WITHOUT FILTER
//declare the new array without setting it equal to []/
//set it equal to the array to be analyzed/
//apply the array method 'filter' to the array so it will effect each data
//before possibly sending it into the new array
//include the logic in the 'filter' parameters that will test against the data
//to determine what goes into the new array/
//OR
//set a new array equal to an old array that will have been filtered by a test
const newarray = arrayNums.filter(predicate);

//___________________________________________________________________

//LOOKING AT MAP

//create an array filled with numbers
const arrayNums = [1, 2, 3, 4, 5]
//create the function to be applied to each piece of data - this uses an arrow function
const func = (number) => number * 2

// WITHOUT MAP
//declare the new array that will contain the changed data
const newarray = []
//start a for loop that will access each individual piece of data in arrayNums
for (let i = 0; i < arrayNums.length; i++) {
    //push each data to the new array after it has undergone the change
  newarray.push(func(array[i]))
}

// WITH MAP
//declare the new array w/o putting it = to []
//set it equal to the array with the data to be used
//apply the array method 'map' to process each piece of the array data through 
//a function before sending it to the new array
//include the function that will apply to each index before it enters the new 
//array as a parameter to 'map'
//OR
//set a new array equal to an old array re-mapped through a function
const newarray = arrayNums.map(func)

//------------------------------------------------------------------------------

//LOOKING AT REDUCE

//declare an array with data
const array = [1, 2, 3, 4, 5];
//declare a variable with the base value of the to-be-accumulated data from the array
const INITIAL_VALUE = 0;
//create a function will take to inputs and add them together
const reduceFunction = (accumulator, element) => accumulator + element;

// WITHOUT REDUCE
//set the 1st input of the function = to the base or starting value
let accumulator = INITIAL_VALUE;
//start a 'for' loop to move through each index of the array
for (let i = 0; i < array.length; i++) {
    //at ea index, input the data at that index to be added to the accumulator
    //that is the initial value and reset 'accumulator' to be = to the output
    //of the function
  accumulator = reduceFunction(accumulator, array[i])
}

// WITH REDUCE
//set a variable = to some array whose indexes will be reduced as each
//piece of array data interacts w/a given value according to the rules of 
//some specific function that resets the given value = to the function output
const accumulator = array.reduce(reduceFunction, INITIAL_VALUE);