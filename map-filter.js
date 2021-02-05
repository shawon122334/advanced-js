//old way to square array numbers
// const numbers=[2,3,4,5,6,7];
// const output=[];
// for(i=0;i<numbers.length;i++){
//     const element=numbers[i];
//     const result =element*element;
//     output.push(result);
// }
// console.log(output);


//we can make function inside map
//we can pass maximum three element in map
// function square(element){
//     return element*element;
// } 
const numbers = [1, 2, 3, 4, 5,6,7,8];
//---------------------------------------
// numbers.map(square);
// numbers.map(function(element,index,array){
//     console.log(element, index,array);
//     // return element*element;
// })
//------------------------------------
// const result=numbers.map(function(element){
//     return element*element;
// })
//-----------------------------------

const result = numbers.map(element => element * element);
console.log(result);
//================================
// const square=element=>element*element;
//=======================================

//map can be used to work on array and output will be on array 

const result1 = numbers.filter(x => x > 5);
console.log(result1);
//filter : we can filer some element from an array .output as array

const isThere=numbers.find(x=>x>5);
console.log(isThere);
//find: it provides only one value if it meet the condition.output one element