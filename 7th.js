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

let nums =[2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

let result = nums.reduce( ( max, el) =>{
    if(el > max){
        return el;
    }else{
        return max;
    }
} );

console.log(result)


