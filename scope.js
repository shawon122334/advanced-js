//we can not the variable inside function,outside the function
//block scope,let/const mood can not be used outside if block
//if mood is declared as var,it takes the declaration part(not the value) to parent scope and works fine.
function sum(first,second){
    let result =first+second;
    if(result>9){
        // let mood="happy";
        var mood="happy";
        mood="funky";
        mood="cranky";
    }
    console.log(mood);
    return result;
    
}
const output=sum(1,9);
console.log(output);