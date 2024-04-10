// 1st class 

// const student = {
//     name : "prince saini",
//     age: 25,
//     eng:78,
//     math:85,
//     phy:82,
//     getAvg(){
//         let avg = (this.eng+this.math+this.phy)/3; 
//             console.log(avg);
//     }
// }

// class 2

// console.log("hello");
// console.log("hello");
// let a=5;
// try{
//     console.log(a);
// }
// catch(e){
//     console.log ("a is not define");
//     console.log(e);
// }
// console.log("hello");
// console.log("hello");
// console.log("hello");


// class 3 arrow function 

// const sum = (a,b) => {
//     console.log(a*b)
// };

// const cube = (n) =>{
//     return n * n * n;
// };

// const power =(a,b) =>{
//     return a**b;
// };


// class 4 

// const mul = (a,b) => (
//     a*b 
// );

// class 5

// console.log("hi there");
// setTimeout( () => {
//     console.log("apna college");
// }, 4000);
// console.log("welcome to");

// class6

// setInterval( ( ) => {
//     console.log("apna college");
// }, 2000);

// let id =setInterval( ( ) => {
//     console.log("apna college");
// }, 2000);

// console.log(id);

// let id2 =setInterval( ( ) => {
//     console.log("prince saini");
// }, 3000);

// console.log(id2);


// class7

const student ={
    name:"prince",
    marks:95,
    prop:this,   // global scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks:() => {
        console.log(this); // parent's scope   -> window
        return this.marks;
    },
    getInfo1: function(){
        setTimeout ( ()=> {
            console.log(this);  //student
        },2000)
    },

    getInfo2: function(){
        setTimeout ( function() {
            console.log(this); // window
        },2000);
    },
}
