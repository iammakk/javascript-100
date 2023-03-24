//1
// let a = [];
// let b = [];

// console.log(a === b, a === b, "q1");
// both false kyunke array ek pass by reference datatype hai iski
// memory location hamesha difernce hoti ha to jab me isko compare karte hain to
// comparison memory ka hota ha jo ke same ni hoti diferent hoti ha

// ================================================================================
//2
// let a = [];
// let b = a;
// console.log(a === b, a === b, "q2");
// true ha output kuke ek var me dusre var ki location
//  stori hori ha kyunke vo ek array ha upr wale question se related hai ye
// ========================================================================

//3
// let a = [2];
// let b = [2];
// console.log(a[0]==b[0],"q3")

// output ha true kyunke yaha per array ke 0th index
// ki value compare hori ha naake memory location
// ========================================================================

//4
// let a = [1, 2, 3, 4];
// console.log(...a, "q4");
// yaha per outut normal string aigi array ki kyune dstructuring krdi gyi ha iski
// ================================================================================

//5
// console.log(typeof NaN) // number
// let a = NaN;
// console.log(NaN == NaN, isNaN(a));
// NaN ek number type hi hai lkn kuch different tarah ka
// imp!!! we can check a variable if its a NaN or not return true or false. iska comparison bhi false hota
// kyuuke har bar ek dusra NaN generate hota ha koi unique to number ha iseliye to false return krta ha
// ref : https://stackoverflow.com/questions/2801601/why-does-typeof-nan-return-number
// ======================================================================================

//6
// console.log(10 - - 10)
// ye output dega 20
// ==========================

//7
// const set = new Set([1, 1, 2, 3, 4,7]);
// console.log(set)

// ==========================

//8
// let data = { name: "azeem" };
// console.log(delete data.name);
// console.log(data)

//9
// let data = { name: "azeem" };
// console.log(delete data);
// console.log(data);
//  delete ni kiya data ko ab

// ====================================================

// 10
// const data = ["1", "2", "3"];
// const [a, b] = data;
// console.log(a, b);
// output 1,2

// ====================================================

// 11
// const data = ["1", "2", "3"];
// const [,,a] = data;
// console.log(a);
// output  3

// ====================================================

// 11
// const data = {a:1,b:2,c:3}
// const { a } = data;
// console.log(a);
// output  1

// ====================================================

//12
// const data1 = { a: 1, b: 2, c: 3 };
// const data2 = { d: 1, e: 2, f: 3 };
// let d = { ...data1, ...data2 };
// output { a: 1, b: 2, c: 3, d: 1, e: 2, f: 3 }

// ====================================================
//13

// const data1 = { a: 1, b: 2, c: 3 };
// const data2 = { d: 1, e: 2, f: 3 };
// let d = { data1, ...data2 };
// console.log(d);
// output { data1: { a: 1, b: 2, c: 3 }, d: 1, e: 2, f: 3 };

// ====================================================
//14
// const data1 = { a: 1, b: 2, c: 3 };
// const data2 = { d: 1, e: 2, c: 7 };
// let d = {... data1, ...data2 };
// console.log(d);
// output { a: 1, b: 2, c: 7, d: 1, e: 2 }

// =========================================================

//15

// let a = 'azeem';
// console.log(a()) //: a is not a function

// =========================================================

//16
// let res = false || {} || null;
// console.log(res);
// agar teeno vals false ha to last wali ko utha lega

//17
// console.log(Promise.resolve(5));

// =========================================================

//18
// console.log("😃" === "😃");
// ttrue coz it matches unicodes of emojies

// =========================================================

// 19
//const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

//console.log(obj); // it parses json

// =========================================================
// 20

// let name = 'azeem';
// function getName() {
//     console.log(name);
//     let name = "az"
// }
// getName() // Cannot access 'name' before initialization

// =========================================================
// 21
// let name = 'azeem';
// function getName() {
//     console.log(name);

// }
// getName() // azeem global scope se accept kr rha value;
// let==>> block level scope

// =========================================================
// 22

// console.log((x => x)('I hate'));
// anonymous

// =========================================================
// 23

// function sumVals(x, y, z) {
//     console.log( x + y + z);

// }
// sumVals(...[1,2,3]) // destruct array ki values

// =========================================================
// 24
// const name = 'azeem is human';
// console.log(!typeof name);

// console.log(!typeof name === "object");
// console.log(!typeof name === "string");

// yaha ye operation left to right chalta hai !typeof name? ty
//type of name to hai to ye false return krta hai to jb compare
// kro false===string to jo marzi hojai false return krega..

// =========================================================
// 25

// let person = { name: "azeem" };
// Object.seal(person); // it wont let you modify with new vals;
// person.age = 21;
// console.log(person);

// =========================================================
// 26
// let a = [1, 2, 3, 4];
// a.shift(); removes first element and by usinng pop removes last elem
// console.log(a);

// ========================================================
// 27

// let a = 3;
// console.log(a%2)
// ========================================================
// 28

// let d = 2;
// console.log(typeof !d);
// koi bhi val ke agy ! laga do to vo usko boolean krdegi aur usme false

// ========================================================
// 29
// diff?bet map and forEach
// map return something but foreach nots

// ========================================================
// 30
//  let a = [1, 2, 3, 4];
// delete a[1];
// console.log(a.length); // remains 4
// console.log(a) //[ 1, <1 empty item>, 3, 4 ]

// ========================================================
// 31
// merge 2 array

// let a = [1, 2, 3];
// let b = [1, 2, 4];
// console.log([...a,...b])  //[ 1, 2, 3, 1, 2, 4 ];

// ========================================================
// 32
// let a = 5;
// setTimeout(() => {
//     console.log(a);
// }, 0);
// a = 100;  takes second a;

// ========================================================
// 33
// let a = 1;
// let A = 5;
// console.log(a,A); case sensitive;
// ========================================================
// 34
// let a = `a`
// let b = "a";
// console.log(a === b);
// ========================================================
// 34
// let a = 10;
// let b = 1;
// let c = 2;
// console.log(a === b === --c); // firsst half become true and it compares with number
// obvioulsy false
// ========================================================
// 35
// console.log([[[[[]]]]]);

// ========================================================
// 36 important hoisting let and var
// pehle variable define kro phr use kroge ==> let
// pehle variable use kro phr bad me define krlena kroge ==> var

// ========================================================
// 37
// function name() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     });
//   }
// }
// name();
// ========================================================
// 38 here is javascript hoisting concept
// DEF
// Hoisting is a JavaScript mechanism where variables and function declarations are moved
// to the top of their scope before code execution.
// keyword var and function only normal function is hoisted and let and const does not allow hoisting.

// Some ways to avoid hoisting are:
// Use let or const — As explained above, using let or const instead of var would throw an exception and not let the program run, hence helping catch the issue earlier.
// Use function expressions instead of function declarations.

// x = 5;
// console.log(x);
// var x; // it is good

// Initializations are not hoisted!
// Hoisting only works for declarations, not initializations.So,
// console.log(y);
// var y = 13;
// The above code will give undefined as output, as it is the same as writing,

// var y;
// console.log(y);
// y = 13;
// Observe how the declaration var y is hoisted,
//   but y = 13 is not, as only the declarations are hoisted!
// Some ways to avoid hoisting are:

// Use let or const — As explained above, using let or const instead
// of var would throw an exception and not let the program run,
//   hence helping catch the issue earlier.
// Use function expressions instead of function declarations
// An example of a function declaration:
// console.log(printRandom());
// function printRandom() {
//   return "Print Random";
// }

// The above function declaration will be hoisted and will
// print out Print Random.However, a function expression
//  like the below snippet will not be hoisted and will throw an error:

// console.log(printRandom());
// var printRandom = function () {
//    return "Print Random";
// }

// func declaration means defining function like in a simple way and expression means assigning a function in a variable
// ========================================================
// 39 here is concept of Js lexical scope.

// Lexical scope is the definition area of an expression.

// In other words, an item's lexical scope is the place in which the item got created.

// Note:

// Another name for lexical scope is static scope.
// The place an item got invoked (or called) is not necessarily the item's lexical scope.
// Instead, an item's definition space is its lexical scope.
// Define a variable in the global scope:
// const myName = "Oluwatobi";

// // Call myName variable from a function:
// function getName() {
//   return myName;
// }
// Question: Which of the two spaces is myName’s lexical scope? Is it the global scope or the getName() function’s local scope?

//   Answer : Remember that lexical scope means definition space — not invocation space.Therefore,
// myName’s lexical scope is the global scope because we defined myName
//     in the global environment.
// ========================================================
// 40 here is javascript closures concept
// DEFF
// A closure is a feature in JavaScript where an inner function has access to the outer
//   (enclosing) function’s variables — a scope chain.
// A closure is a function that preserves the outer scope in its inner scope.

// Closure:Function bundled with its lexical environment is known as a closure.
// Whenever function is returned, even if its vanished in execution context but still it remembers
//  the reference it was pointing to.Its not just that function alone it returns but the entire
//  closure and that's where it becomes interesting
// !!Thank you so much, Akshay for this :) :)

// ========================================================
// 41
// setTime out in loop with var and let
// only scope differnece var has function scope and let has block scope
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   });
// }

// ========================================================
// 42
// console.log(+true); // 1
// console.log(typeof +true); // number

// ========================================================
// 43
// let data = "size";
// const bird = {
//   size:"small"
// }
// console.log(bird[data]); //small
// console.log(bird["size"]);//small
// console.log(bird.size);//small
// console.log(bird.data);//small
// ========================================================
// 44
// let num = 0;
// console.log(num++); //0
// console.log(++num); //2

// console.log(num);//2
// ========================================================
// 45
// function a(...params) {
//   console.log(typeof params); // object hai aur ... se array me convert hoj{a:"a"}i
// }
// a({a:"a"}) 
// ========================================================
// 46
// function ab() {
//   'use strict' // is se hame proper rules follow krenge honge
//   a = 6;
//   console.log(a);
// }
// ab()
// ========================================================
// 47
// session storage clears as soon as the tab closes
// ========================================================
// 48
// hasOwnProperty returns a boolean value indicating whether
//  the object on which you are calling it has a property with the name of 
//  the argument.For example:

// var x = {
//     y: 10
// };
// console.log(x.hasOwnProperty("y")); //true
// console.log(x.hasOwnProperty("z")); //false
