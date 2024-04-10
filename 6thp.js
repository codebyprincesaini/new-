// 1

// const square =(n) => n*n;
// console.log(square(4));


let id = setInterval( () =>{
    console.log("hello world");
},3000);

setTimeout(() =>{
    clearInterval(id);
    console.log("clear interval ran")
},30000);