// q1

// let nums = [10, 20, 30, 40];
// let ans = nums.every((el) => el % 10 ==0);
// console.log(ans);

// q2

// let nums = [10, 20, 30, 40];

// let min = nums.reduce( (min , el) => {
//     if(min<el){
//         return min;
//     }else {
//         return el;
//     }
// });
// console.log(min);




let nums = [10, 20, 30, 40];
function getMin(nums) {
    let min = nums.reduce( (min , el) => {
    if(min<el){
        return min;
    }else {
        return el;
    }
});
return min;
}
console.log(getMin(nums));
