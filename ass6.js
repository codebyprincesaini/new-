//Ans 1
// let arr = [1, 2, 3, 4, 5, 6];
// const arrayAverage = (arr) => { 
//     let total = 0;
//     for (let number of arr) { 
//         total += number;
// }
//     return total / arr.length;
// };
// console.log(arrayAverage(arr));


//Ans 2

// let num = 4;

// const isEven = (num) => num % 2 == 0;


// ans3

// const object = {
//     message: 'Hello, World!',
    
//     logMessage() { console.log(this.message);
//     }
//     };
    
//     setTimeout(object.logMessage, 1000);
    

//  After a delay of 1 second, undefined is logged to the console.
//  While the setTimeout() function uses the object.logMessage as a callback, still, it invokes object.logMessage as a regular function, rather than a method.

// And during a regular function invocation this equals the global object, which is a window in the case of the browser environment.

// That's why console.log(this.message) inside logMessage method logs window.message, which is undefined.

// ans4

let length = 4; 
function callback() {
    console.log(this.length);
    
    }
    
    const object = { 
        length: 5, 
        method(callback) {
            callback();
        },
};
    
    object.method(callback, 1, 2);
    

    
// 'Hello, World!' is logged to the console.

// object.getMessage() is a method invocation, that's why this inside the method equals object.

// There's also a variable declaration const message = 'Hello, Earth!' inside the method. The variable doesn't influence the value of this.message.