// ERROR HANDLING IN JAVASCRIPT
// Checkout this Error Handling in other references

function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[mo]) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo'; // throw keyword is used here
  }
}

try { // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
  monthName = 'unknown';
  //logMyErrors(e); // pass exception object to error handler (i.e. your own function)
}



// Script code for the dropdown section below
function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  alert('Number of options selected: ' + howMany(document.selectForm.musicTypes));
});


// Label Statements
// example one
            // label :
            //      statement


// example two

        // markLoop:
        // while (theMark === true) {
        // doSomething();
        // }

// Label and Break in Statements

let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}


// Label and Continue  in While loops
let i = 0;
let j = 10;
checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) === 0) {
          continue checkj;
        }
        console.log(j + ' is odd.');
      }
      console.log('i = ' + i);
      console.log('j = ' + j);
  }



const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}



/**
 * FUNCTIONS
 */

function myFunc(theObject) {
  theObject.make = 'Toyota';
}

var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var x1, y1;

x1 = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y1 = mycar.make; // y gets the value "Toyota"
                // (the make property was changed by the function)



// Function Declaration

function square(number) {
  return number * number;
}





// Function Expression
    // const square = function(number) { return number * number }
    // var x = square(4) // x gets the value 16


    // const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }
    // console.log(factorial(3))

// Further use of function expression. This case explains function in function
function map(f, a) {
  let result = []; // Create a new Array
  let i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
const f = function(x) {
   return x * x * x;
}
let numbers = [0, 1, 2, 5, 10];
let cube = map(f,numbers);
console.log(cube);

// Recursive function // How to use Recursive functions in JavaScript
    function factorial(n) {
      if ((n === 0) || (n === 1))
        return 1;
      else
        return (n * factorial(n-1));
    }


    console.log(factorial(7));

// Function Scope
// The following variables are defined in the global scope
var num1 = 20,
    num2 = 3,
    myName = 'Chamakh';

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  var num1 = 2,
      num2 = 3;

  function add() {
    return myName + ' scored ' + (num1 + num2);
  }

  return add();
}

getScore(); // Returns "Chamakh scored 5"


/**
 * CLOSURES
 */

// Example 1

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41
console.log(a, b, c);


/**
 * Closures are one of the most powerful features of JavaScript. 
 * JavaScript allows for the nesting of functions and grants the inner 
 * function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to).
However, the outer function does not have access to the variables and 
functions defined inside the inner function. This provides a sort of encapsulation 
for the variables of the inner function.
Also, since the inner function has access to the scope of the outer function, the variables and 
functions defined in the outer function will live longer than the duration of the outer function execution, 
if the inner function manages to survive beyond the life of the outer function. 
A closure is created when the inner function is somehow made available to any scope outside the outer function.
 */

var createPet = function(name) {
  var sex;

  return {
    setName: function(newName) {
      name = newName;
    },

    getName: function() {
      return name;
    },

    getSex: function() {
      return sex;
    },

    setSex: function(newSex) {
      if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
        newSex.toLowerCase() === 'female')) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet('Vivie');
pet.getName();                  // Vivie

pet.setName('Oliver');
pet.setSex('male');
pet.getSex();                   // male
pet.getName();                  // Oliver

//Example next 

var getCode = (function() {
  var apiCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify...

  return function() {
    return apiCode;
  };
})();

getCode();    // Returns the apiCode


// Example next 
function myConcat(separator) {
   var result = ''; // initialize list
   var i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}

// returns "red, orange, blue, "
myConcat(', ', 'red', 'orange', 'blue');

// returns "elephant; giraffe; lion; cheetah; "
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

// returns "sage. basil. oregano. pepper. parsley. "
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');


//Setting the default value of Parameters

function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5


// Rest Parameter

/**
 * 
 * @param {*} multiplier 
 * @param  {...any} theArgs 
 * @returns 
 * 
 * The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
In the following example, the function multiply uses rest parameters to collect arguments from the second one to the end. 
The function then multiplies these by the first argument.
 */


function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

let arr1 = multiply(2, 1, 2, 3);
console.log(arr1); // [2, 4, 6]


/*
EXPRESSION AND OPERATORS
*/

var foo = ['one', 'two', 'three'];

// without destructuring
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// with destructuring
var [one, two, three] = foo;
/**------------------------------------------------------------------------------------- */


// 1.  Increment(++) / Decrement(--)
//Unary operator. Adds one to its operand. If used as a prefix operator (++x), 
//returns the value of its operand after adding one; if used as a postfix operator (x++), 
//returns the value of its operand before adding one.	

//If x is 3, then ++x sets x to 4 and returns 4, whereas x++ returns 3 and, only then, sets x to 4.


// 2. Unary negation (-)	Unary operator. Returns the negation of its operand.	If x is 3, then -x returns -3.

// 3. Unary plus (+)	Unary operator. Attempts to convert the operand to a number, if it is not already.	+"3" returns 3. +true returns 1.

// 4. Exponentiation operator (**)	Calculates the base to the exponent power, that is, base^exponent	2 ** 3 returns 8. 10 ** -1 returns 0.1.

//Logical Operators
// &&
var a1 =  true && true;     // t && t returns true
var a2 =  true && false;    // t && f returns false
var a3 = false && true;     // f && t returns false
var a4 = false && (3 == 4); // f && f returns false
var a5 = 'Cat' && 'Dog';    // t && t returns Dog
var a6 = false && 'Cat';    // f && t returns false
var a7 = 'Cat' && false;    // t && f returns false

// || 

var o1 =  true || true;     // t || t returns true
var o2 = false || true;     // f || t returns true
var o3 =  true || false;    // t || f returns true
var o4 = false || (3 == 4); // f || f returns false
var o5 = 'Cat' || 'Dog';    // t || t returns Cat
var o6 = false || 'Cat';    // f || t returns Cat
var o7 = 'Cat' || false;    // t || f returns Cat


/**
 * COMMA OPERATOR
 */

var x2 = [0,1,2,3,4,5,6,7,8,9]
var a2 = [x2, x2, x2, x2, x2];

for (var k = 0, p = 9; k <= j; k++, p--)
//                                ^
  console.log('a[' + k + '][' + p + ']= ' + a2[k][p]);


  


/**
 * NUMBERS AND DATES
 */

// Decimal NUmbers

1234567890
42

// Caution when using leading zeros:

0888 // 888 parsed as decimal
0777 // parsed as octal in non-strict mode (511 in decimal)


// Binary Numbers 
var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607

// Octal Numbers

var n = 0755; // 493
var m = 0644; // 420


// Hexadecimal Numbers

// 0xFFFFFFFFFFFFFFFFF // 295147905179352830000
// 0x123456789ABCDEF   // 81985529216486900
// 0XA                 // 10


// Exponentiation


//1E3   // 1000
// 2e6   // 2000000
// 0.1e2 // 10



// Number Objects

var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;



/**
 * INDEXED COLLECTION
 */

let cats = ['Dusty', 'Misty', 'Twiggy']
console.log(cats.length)  // 3

cats.length = 2
console.log(cats)  // logs "Dusty, Misty" - Twiggy has been removed

cats.length = 0
console.log(cats)  // logs []; the cats array is empty

cats.length = 3
console.log(cats)  // logs [ <3 empty items> ]


// Iterating over an Array
// Using normal loop
let colors = ['red', 'green', 'blue']
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i])
}


// Using forEach method of an Array
let colors = ['red', 'green', 'blue']
colors.forEach(function(color) {
  console.log(color)
})
// red
// green
// blue


// forEach method and Arrow functions

let colors = ['red', 'green', 'blue']
colors.forEach(color => console.log(color))
// red
// green
// blue


// Array Methods

// Concatenate

let myArray = new Array('1', '2', '3')
myArray = myArray.concat('a', 'b', 'c')
// myArray is now ["1", "2", "3", "a", "b", "c"]


// Join
// This uses a delimiter to join
let myArray = new Array('Wind', 'Rain', 'Fire')
let list = myArray.join(' - ') // list is "Wind - Rain - Fire"

//Push

let myArray = new Array('1', '2')
myArray.push('3')  // myArray is now ["1", "2", "3"]


// Pop

let myArray = new Array('1', '2', '3')
let last = myArray.pop()
// myArray is now ["1", "2"], last = "3"

// Shift

let myArray = new Array('1', '2', '3')
let first = myArray.shift()
// myArray is now ["2", "3"], first is "1"


// Unshift

let myArray = new Array('1', '2', '3')
myArray.unshift('4', '5')
// myArray becomes ["4", "5", "1", "2", "3"]


//Slcie

let myArray = new Array('a', 'b', 'c', 'd', 'e')
myArray = myArray.slice(1, 4)  // starts at index 1 and extracts all elements
                               // until index 3, returning [ "b", "c", "d"]

// Splice 

let myArray = new Array('1', '2', '3', '4', '5')
myArray.splice(1, 3, 'a', 'b', 'c', 'd')
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.


// Reverse

let myArray = new Array('1', '2', '3')
myArray.reverse()
// transposes the array so that myArray = ["3", "2", "1"]


// Sort

let myArray = new Array('Wind', 'Rain', 'Fire')
myArray.sort()
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]

// sorting using a function

let sortFn = function(a, b) {
  if (a[a.length - 1] < b[b.length - 1]) return -1;
  if (a[a.length - 1] > b[b.length - 1]) return 1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
}
myArray.sort(sortFn)
// sorts the array so that myArray = ["Wind","Fire","Rain"]


// indexOf

let a = ['a', 'b', 'a', 'b', 'a']
console.log(a.indexOf('b'))     // logs 1

// Now try again, starting from after the last match
console.log(a.indexOf('b', 2))  // logs 3
console.log(a.indexOf('z'))     // logs -1, because 'z' was not found


// lastIndexOf
let a = ['a', 'b', 'c', 'd', 'a', 'b']
console.log(a.lastIndexOf('b'))     // logs 5

// Now try again, starting from before the last match
console.log(a.lastIndexOf('b', 4))  // logs 1
console.log(a.lastIndexOf('z'))     // logs -1


// forEach

let a = ['a', 'b', 'c']
a.forEach(function(element) { console.log(element) })
// logs each item in turn


// map
let a1 = ['a', 'b', 'c']
let a2 = a1.map(function(item) { return item.toUpperCase() })
console.log(a2) // logs ['A', 'B', 'C']


// filter

let a1 = ['a', 10, 'b', 20, 'c', 30]
let a2 = a1.filter(function(item) { return typeof item === 'number'; })
console.log(a2)  // logs [10, 20, 30]


// every

function isNumber(value) {
  return typeof value === 'number'
}
let a1 = [1, 2, 3]
console.log(a1.every(isNumber))  // logs true
let a2 = [1, '2', 3]
console.log(a2.every(isNumber))  // logs false


// some

function isNumber(value) {
  return typeof value === 'number'
}
let a1 = [1, 2, 3]
console.log(a1.some(isNumber))  // logs true
let a2 = [1, '2', 3]
console.log(a2.some(isNumber))  // logs true
let a3 = ['1', '2', '3']
console.log(a3.some(isNumber))  // logs false


// reduce

let a = [10, 20, 30]
let total = a.reduce(function(accumulator, currentValue) { return accumulator + currentValue }, 0)
console.log(total) // Prints 60


// Multi-Dimensional Array

let a = new Array(4)
for (let i = 0; i < 4; i++) {
  a[i] = new Array(4)
  for (let j = 0; j < 4; j++) {
    a[i][j] = '[' + i + ', ' + j + ']'
  }
}


/**
 * KEYED COLLECTIONS
 */

// Map Objects

let sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('dog'); // woof
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (let [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0


// Set Objects
// set stores unique values
let mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"


//Converting between Array and Set
//You can create an Array from a Set using Array.from or the spread syntax. 
//Also, the Set constructor accepts an Array to convert in the other direction.

Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);


/**
 * OBJECT IN JAVASCRIPT
 */

var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;


// Using object initializer

var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};


// Using string 

myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;




