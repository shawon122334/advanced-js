//we are returning a function form a function
function stopWatch(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
const clock1=stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2=stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());

// closed scope here called closure
//if we call a function from a function or return a function from a function then it creates a closed environment,and the inside function that is called or returning ,if it can access outside(like global) variable .then the result like clock 1 /clock 2/clock 3 can contain their own values as if they created a closed scope.
//when we create a internal scope but can not access from outside 