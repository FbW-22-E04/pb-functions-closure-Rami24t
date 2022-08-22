// A closure is when a function is having access to its variables in the parent scope, even after the parent function has closed.
//a. closure is used in the function inside the function personalDice because it is accessing name variable from the parent function.
//b. Compare and contrast calling dansRoll the first and second time. What is always the same? What could change?
// name still has the value 'Dan' and newRoll has now a new random number between 1 and 6
//c.
// The scope of the anonymous function 
// 


//3.

const createBase= function (base)
{
  return function (num) {return base+num;}
}

const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
