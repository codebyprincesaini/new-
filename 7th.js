// class 1 for each


// let arr = [1, 2,  3, 4, 5];
// function print (el) {
//     console.log(el);
// }
// arr.forEach(print);

// // OR
// arr.forEach(function(el){
//     console.log(el);
// });



// let stud =[{
//     name:"prince",
//     marks:95,
// },
// {
//     name:"prince",
//     marks:96,
// },
// {
//     name:"prince",
//     marks:95,
// }]

// arr.forEach((stud) => {
//     console.log(stud.marks);
// })


// class 2 map function 

// let num =[ 1, 2, 3, 4];
// let double =num.map(function(ele){
//     return ele*2;
// });

// let stud =[{
//     name:"prince",
//     marks:95,
// },
// {
//     name:"prince",
//     marks:96,
// },
// {
//     name:"prince",
//     marks:95,
// }];

// let gpa = stud.map((el) =>{
//     return el.marks /10;
// });


// let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9,];
// let even = nums.filter((num) => (num%2 ==0));


// class3

// [1, 2, 3, 4].every((el)=> (el%2==0));


// [2,4].every((el)=> (el%2==0));

// class4 reduce method 



// let nums=[1, 2, 3, 4];
// finalValue=nums.reduce((res, el) => {
//     console.log(res);
//     return res+el;
// });
// console.log(finalValue);

// class5

// let nums =[2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

// let result = nums.reduce( ( max, el) =>{
//     if(el > max){
//         return el;
//     }else{
//         return max;
//     }
// } );

// console.log(result)

// class 6 defult function 

// function sum (a,b =3){
//     return a+b;
// }

// sum(5);
// console.log(sum(5))

// class7 8 9  spread with object literals

// let data ={
//     email: "sainiprinc324@gmail.com",
//     password: "abcd",
// };

// const dataCopy ={...data ,id:123 , country:"india"};


// let arr =[1, 2, 3, 4, 5, ];
// let obj1 ={...arr};


// class10 Rest


// function sum(...args){
//     for(let i=0; i<args.length; i++){
//         console.log("you gave us: ",args[i]);
//     }
// }

// function min(){
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1);
// }


// function sum(...args){
//     return args.reduce((sum,el) => sum +el);
// }

// function min (msg, ...args){
//     console.log(msg);
//     return args.reduce((min,el) =>{
//         if (min>el){
//             return el;
//         }else{
//             return min;
//         }
//     });
// }

// class11 Destructuring

// let names =["tony", "bruce", "steve","peter"];
// let[winner, runnerup] = names;
// console.log(winner, runnerup,);

// class12 destructuring in object 

const student ={
    name:"karan",
    class:9,
    age:14,
    subjects: ["hindi", "english", "math", "science", "social studis"],
    username: "karan123",
    password: 1234,
};

const {username: user, password: pass} =student;

console.log(user);
























