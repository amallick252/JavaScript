//let is used to declare variable
//const is used to declare constant, can be used if we dont want to change the vale of that variable for the whole program

//let name ='Abinash';
//console.log(name);

//Data Types
// premitive data types/value types: strings, numbers, boolean, undefined,null
// reference data types/ : object, array,function

// premitive data types

//let name ='Abinash'; //string literal
//let age = 31; // number literal or data typre
//let isApproved = 'false'; //boolean literal
//let firstName; //if we do not initialize value is undefined by default
//let selectedColor = 'null'; //use null where we need to clear the value of a variable
//you can check data type by typing 'typeof' operator then 'variable name' to find out, check below example
//typeof name

// reference data types

//Object
//{} is called object literal, within it goes one or more key value pairs (aka. properties of the object)
let person ={
    name:'Abinash',
    age:'31',
};
//console.log(person);

//dot notation
person.age='30';
console.log(person.age);

//bracket notation
person['name']='Rinku'
console.log(person.name);

//array (its a data structure that is used to represent a list of items)
let selectedColor=['Red', 'blue'];
selectedColor[2]=65;
console.log(selectedColor);
console.log(selectedColor.length);

//functions (on a function we dont need to add a ; at the end, as it is not a veriable)
function square(number){
    return number*number;
}
let number = square(200000000);
console.log(number);