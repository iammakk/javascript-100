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
