// function

// function hello(){
//     console.log("hello");
// }
// hello();

// function printName(){
//     console.log("prince saini");
// }

// printName();

// function print1to5(){
//     for (let i=1; i<=5; i++){
//         console.log(i);
//     }
// }
// print1to5();



// function isAdult(){
//     let age=18;
//     if(age>=18){
//         console.log("isAdult");
//     } else{
//         console.log("not adult")
//     }
// }
// isAdult();


// class 2 function with arguments

// function printInfo(name,age){
//     console.log(`${name}'s age is ${age}.`);
// }
// printInfo("prince saini",25);

// class3 return 

// function sum(a,b){
//     return a+b;
// }

// let s= sum(3,4);
// console.log(s);


// function isAdult(age){
//     if(age>=18){
//         return "adult";
//     }else{
//         return "not adult";
//     }
//     console.log("bye")
// }

// console.log(isAdult(15));



// class3 scope 
// let sum =54;

// function calSum(a,b){
//     //let sum =a+b    //function scope
//     console.log(sum);
// }
// calSum(1,2);

// console.log(sum);


// block scope

// for (let i=1; i<=5 ;i++){
//     console.log(i);   //block scope
// }


// lexical scope


// function outerFunc(){
//     let x=5;
//     let y=6;
//     function innerFunc(){
//         console.log(x);     //hosting
//         console.log(y);
//     }
//     innerFunc();
// }
// outerFunc();

//function exression

// let name = "prince saini";

// let sum= function(a,b){
//     return a+b;
// }

// let hello = function(){
//     console.log("Hello");
// };

// hello = function(){
//     console.log("namste");
// }

//higher order function


// function multipleGreet(func, n){  // higher order function
//     for(let i=1; i<=n; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("hello");
// }
// multipleGreet(greet,20);


//return function

// function oddOrEvenTest(request){
//     if(request == "odd"){
//         let odd= function(n){
//             console.log(!(n%2==0));
//         }
//         return odd;
//     }else if (request == "even"){
//         let even= function(n){
//             console.log(n%2==0);
//         }
//         return even;
//     } else{
//         console.log("wrong request");
//     }
// }

// let request = "odd";


//method

const calculator = {
    num: 55,
    add: function (a,b){
        return a+b;
    },
    sub: function (a,b){
        return a-b;
    },
    mul: function (a,b){
        return a*b;
    }
}