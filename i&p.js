// Create 2 objects - parent and child. Attach methods to parent and  those methods
//  in child object using parents prototypeuse

// let parent={
//     hi:function(){
//         console.log("welcome");
//     },
//     hello:function(){
//         console.log("to page");
//     }
// }
// let child={}
// child.__proto__=parent
// console.log(child.hi());

// Write code to explain prototype chaining

// let chaining={
//     akhil:"not my name",
//     age:22,
//     career:"null right now"
// }
// let smallchain={
//     name:"methushel",
//     surname:"pathiwada"
// }
// let anotherchain={
//     iq:"150",
//     apptitude:"nill"
// }
// smallchain.__proto__=chaining
// console.log(smallchain.age);

// Add a method to calculate sum of all elements in Array in array's protype,
//  use that method to calculate sum for multiple arrays

// let array = [77, 79, 97, 1000, 22];
// let arr = array.reduce((acc, curr) => {
//   acc += curr;
//   return acc;
// });
// console.log(arr);

// Write a JavaScript function to retrieve all the names of object's own and inherited properties.

// let animal={
//     legs:4,
//     moves:'fast',
//     crawl:true
// }
// let anotherobj={
//     pets:"dog,cat,birds",
//     living:"in home with us",
//     loyal:true
// }
// let obj={
//     func:function humans(){
//         console.log("cruel");
//     }
// }
// console.log(anotherobj.hasOwnProperty('pets'));