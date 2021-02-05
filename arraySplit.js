const nums=[1,2,3,4,5,6,7];
// const part=nums.slice(2,5);
const removed=nums.splice(2,3,100,200);
// console.log(removed);
// console.log(nums);
//slice does not change original array
//splice deletes (2,4) 4 element from 2 index.also can inject element
//we can join array like a string and output will not be in array 
const new1=nums.join(',');
console.log(new1);

//we can slice array 
// we can delete from array 
// we can join array 