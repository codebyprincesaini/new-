// 1. create a function that prints a poem 

// function printPoem(){
//     console.log("twinkle twinkle little star");
// }

// printPoem();


// 2. create a function to roll a dice & always display the value of rhe dice



// function rollDice(){
//     let rand = Math.floor(Math.random() * 6)+1;
//     console.log(rand);
// }

// rollDice();
// rollDice();
// rollDice();
// rollDice();

// 3. create a function that givies us the average of 3 numbers .

// function calcAvg(a,b,c){
//     let avg=(a+b+c)/3
//     console.log(avg);
// }
// calcAvg(3,3,3);

// 4. create a function that prints the multiplication table of a Number. 

// function printTable(n){
//     for(let i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }

// printTable(7);


// 5. create a function that returns the sum of numbers from 1to n . 


// function getSum(n){
//     let sum =0;
//     for (let i=1; i<=n; i++){
//         sum += i;
//     }
//     return sum;
// }

// console.log(getSum(3));




// 6. create a function that returns the concatenation of all strings in an array

let str =["hi","hello","bye","!"];

function concat(str){
    let result="";
    for(let i=0; i<str.length; i++){
        result +=str[i];
    }
    return result;
}

console.log(concat(str))