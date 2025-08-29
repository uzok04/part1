let nums = [1,2,3,4]
let total = nums.reduce((acc,num) => {
    return acc + num
}, 0)
console.log(total)