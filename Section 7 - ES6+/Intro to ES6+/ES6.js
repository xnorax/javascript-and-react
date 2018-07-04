/**
 * add() print a number
 * based on the addition of passed-in numbers
 */
function add (x, y = 10) {
    console.log(x+y);
}

/**
 * program will look at default values only when value is not provided in the call
 * default values should be at the end and non default at the beginning. i.e., function add (x = 10, y) and calling add(9) will print NaN
 */
add(9); 
 
// Destructuring with objects
let mobile = {
    name:"Samsung S8",
    price:"2K"
};

let {name , price} = mobile;
console.log(`${name} costs ${price} SAR`);

let {name: mobileName , price: mobilePrice} = mobile;
console.log(mobileName);

var {party: j, party:k} = {party:100};
console.log(`${j} = ${k} = 100`);

// Destructuring with arrays
let numbers = [1,2,3];
let [i,ii,v] = numbers;
console.log(`${i} ${ii} ${v}`);

// Swapping >_<
let a = 10;
let b = 20;
[a,b] = [b,a];
console.log(`${a} ${b}`);

// Arrow Functions
const arr = [1, 2, 3];
const squares = arr.map(x => x * x);

// Traditional function expression:
const squares = arr.map(function (x) { return x * x });
