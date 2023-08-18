// 'div.container' enter for class
// <div class="container"></div>
// 'div#container'enter for id
// <div id="container"></div>
// Id be used for only one element, class can be used in multiple element
// hit tab for autocomplete
// '', "" both can be used in JS
// ctrl + / to comment out, ctrl + k then ctrl + U to uncomment
// /* for multi line comments*/
// alt+click= multiple cursor

// 1. Ways to print in Javascript
// console.log('abinash');
// alert('me');
// document.write('This is document write');

// 2. Javascript console API
// console.log('Hello World', 4+5, 'hola');
// console.warn('This is a warning');
// console.error("this is an error");

// 3. Javascript Variables
// What are variables? Vriables are used to store data values

// var number1 = 23;
// var number2 = 65;
// console.log(number1+number2);
// let a= 'Abinash';//var is used in old versions, use let and const(good practice)
// const a=(43);
// console.log(a);


// 4. Data types in JS

// Premetive data types (strings, numbers, boolean, undefined, null, symbol)

// number
// var num1 = 34;
// var num2 = 29;
// console.log(num1+num2);

// string
// var str1 = "This is string no 1";
// var str2 = 'This is string no 2';
// console.log(str1, str2);
// strings can be used in '' or "" but for numbers & reserved words,  we dont need it

// booleans
// var a = true;
// var b = false;
// console.log(a, b);

// undefined
// var ind;
// console.log(ind);

// let und = undefined;
// console.log(und);
// if the value is not defined or undefined it prompts undefined

// null
// var n = null;
// console.log(n);
// when you dont want anything to be there in the variable

// reference data types ( object, array,function)

// object
// var marks={
//     Abinash:100,
//     Sonali: 85,
//     Omm:99
// }
// console.log(marks);

// arrays
// var arr = [1, 2, 3, 4, 5, 'Poco'];
// console.log(arr);
// console.log(arr[3], arr[5]);


// Operators in Javascript
// operator (+,-,/,*) operand(67, 34, 3, 5)

// Arithmatic operator
// var a = 67;
// var b = 34;
// console.log('The value of a+b =', a+b);
// console.log('The value of a-b =', a-b);
// console.log('The value of a/b =', a/b);
// console.log('The value of a*b =', a*b);

// Assignment operators
// var c = b;
// c += 30; // output 64
// c -= 30; // output 4
// c *= 12; // output 408
// c /= 3; // output 11.xxx
// console.log(c);


// comparison Operator

// let x = 3;
// let y = 5;
// console.log(x==y); // output false
// console.log(x>=y); // output false
// console.log(x<=y); // output true
// console.log(x<y);  // output true

// Logical operator

// logical and
// console.log(true&&true);
// console.log( false&&false);
// console.log(false&&true);
// console.log(true&&false);

// Logical or
// console.log(true||true);
// console.log(false||false);
// console.log(false||true);
// console.log(true||false);

// logical not
// console.log(!false);
// console.log(!true);

// Function in Javascript
// DRY: Do not Repeat Yourself
// Blue in G CHROME console is number, black in console is a string

// if-else lader
// /*
// let age = 19;

// age=17;
// if (age>30){
//     console.log('You are still young');
// }
// else if(age>22){
//     console.log('you are very Young');
// }
// else if(age>18){
//     console.log('you are very very Young');
// }
// else{
//     console.log('Hello Kid!');
// }
// console.log('End of if else lader!')
// */
// /*
// let age = 20;
// if (age<=10){
//     console.log('You are not allowed to drink Rasna!')
// }
// else if(age>15){
//     console.log('Ofcourse You can!')
// }
// else if (age>10){
//     console.log('You can drink Rasna!')
// }

// else{
//     console.log('You are free to drink')
// }
// */

// Loops (first arrey is used for each example types)

// for loop
// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for each loop
// arr.forEach(function(element){
//     console.log(element);
// });

// while loop (it will check the conditions before executing)
// let k = 0;
// while(k < arr.length){
//     console.log(arr[k]);
//     k++;
// }

// do-while loop(it will execute the first iteration atleaset once, then check for conditions)
// let l = 0;
// do {
//     console.log(arr[l]);
//     l++;
// }
// while (l < arr.length);

// Break condition(Break=leave looping)
// for(m = 0; m < arr.length; m++){
//     if(m==3){
//         break;
//     }
//     console.log(arr[m]);
// }

// continue condition (continue=leave this itretion and move to the next iterations)
// for(m = 0; m < arr.length; m++){
//     if(m==2){
//         continue;
//     }
//     console.log(arr[m]);
// }

// Array Methods (check for more in the internet)
// let myArr = [1, 2, 3, true, null, 'Fan', 'Light'];
// console.log(myArr.length);
// myArr.pop(); //pop out last element from array
// myArr.push('Abinash'); //push a new element at the end
// myArr.shift();//will remove the first element
// myArr.unshift('Sonali');//will push a new element at the beginning
// let new.length= console.log(myArr.unshift(sonali));
// console.log(myArr);

// string methods(check for more in the internet)
// let str1 = 'Abinash is a good boy and again a good boy.';
// console.log(str1.length);// find string length
// console.log(str1.indexOf('boy'));//index of method
// console.log(str1.lastIndexOf('boy'));//lst index of method
// console.log(str1.slice(1, 7)); //slice method
// let Go = str1.replace('Abinash', 'Rinku');
// Go = Go.replace('good', 'bed');//replace method only replaces first occurance
// console.log(Go, str1);

// date method (check for more in the internet)
// let myDate = new Date();//new key word is used to make a new day
// console.log(myDate);// complete date and time
// console.log(myDate.getTime());//provides time in seconds
// console.log(myDate.getDay());//th day of the week, starts from 0
// console.log(myDate.getFullYear());
// console.log(myDate.getSeconds());
// console.log(d);

// Document Object Model (Dom) manipulation (need more clarifications)(2.8_2.18)

// Get Element
// let elem=document.getElementById('bulb');
// console.log(elem);
// let elemCl = document.getElementsByClassName('btn');
// console.log(elemCl);

// Event Selector in JS
// onclick
// function clicked(){
//     console.log('The button was clocked!');
// }

// onload
// window.onload = function(){
//     console.log('The document is loaded');
// }

// Event listener
// btn.addEventListener('click', function(){
//     console.log('Click Hua!');
// })

// container.addEventListener('mouseover', function(){
//     console.log('Mouse on container!');
// })

// container.addEventListener('mouseout', function(){
//     console.log('mouse out of container!');
// })

// container.addEventListener('mouseup', function(){
//     console.log('mouse up when clicked on container!');
// })

// container.addEventListener('mousedown', function(){
//     console.log('mouse down when clicked on container!');
// })

// Function & Arrow Fucntion
// es5
// let sum = function () {
//     let a = 20;
//     let b = 30;
//     return a + b;
// }
// console.log(sum());

// es6 //Here are 4 types of How to write an arrow function( 3rd must be preffered)
// let sum=() =>{
//     let a=20;
//     let b=10;
//     return a+b;
// }
// console.log(sum());

// let a=20;
// let b=20;
// sum=()=>a+b;
// console.log(sum());

// let sum = (a, b) => a + b;
// console.log(sum(30, 70));

// function sum(a,b){
//     return a+b;
// }

// setTimeout & setInterval
// let logkaro=() => {
//     console.log('Hello Ji! You are logged')
// }
// setTimeout(logkaro, 2000);
// setInterval(logkaro, 300);
// let clr= setInterval(logkaro, 1000)// Use clearInterval & clearTimeout to stop these
// clearInterval(clr);

// JavaScript Local Storage(it lets you save data in user's pc(on domain) as strring)
// localStorage.setItem('name', 'Abinash');
// localStorage.clear();// to clear
// localStorage.removeItem('name');// to remove an itom
// localStorage.getItem('name');

// JSON
// let obj={name: 'Abinash', length: 1};
// jso=JSON.stringify(obj);
// console.log(jso);



// completed upto 2.34.10
// 2.10

// DOM Sheryians coding
// 4 pillers of DOM

// 1.Selecting of an Element
// let qs = document.querySelector("#btn");// can use #id, .class, h1 or similar, declare a variable if you want to use it multiple times
// console.log(qs);
// var x = document.getElementById("bulb");//for selecting by id
// console.log(x);
// var y = document.getElementsByClassName("btn");//for celecting by class name
// console.log(y);

// 2.Changing HTML & Text
// var x = document.querySelector("h1")
// x.innerHTML="<h1>Har Har Mahadev</h1>"; //it will show in HTML
// x.innerText= "<h1>Har Har Mahadev</h1>";// it will show in text
// or
// document.querySelector("h1").innerHTML="This can be used for single use";

// 3.Changing CSS
// let x = document.querySelector('h2');
// x.style.color = ('red');
// x.style.backgroundColor = ("yellow");

// 4. Event Listener
// x.addEventListener('click', function(){
//     console.log('Jai Mahakaal');
//     x.innerHTML= 'Jai Mahakaal';
//     x.style.color = ('blueviolet');
// })
// x.addEventListener('mouseover', function(){
//     x.style.color= ('grey');
//     x.style= '50px solid';
//     console.log("it works");
// })
// x.addEventListener('mouseout', function(){
//     x.style.color= ('black');
//     console.log("it doesn't work");
// })

// Bulb switch program (on/off same button)
// let bulb = document.querySelector('#bulb');
// let btn = document.querySelector('.btn');
// fl = 0;
// btn.addEventListener('click', function(){
//     if(fl==0){
//         console.log('switch is On!');
//         bulb.style.backgroundColor = ('yellow');
//         fl=1;
//     }
//     else{
//         console.log('Switch is Off!');
//         bulb.style.backgroundColor = ('transparent');
//         fl=0;

//     }
// })

// Multiple events & selecting them
// let z = document.querySelectorAll('h1');
// z.forEach(function(e){
//     console.log(e);
// })


// let z = document.querySelectorAll('h1');
// console.log(z);
// setTimeout
// setInterval
// future Projects
