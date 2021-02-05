//map filter
//how do we access an array object 
const students=[
    {id:32,name:'Omar Sani'},
    {id:34,name:'Manna'},
    {id:43,name:'Moyuri'},
    {id:45,name:'Dipjol'}
];
//i want to grab all name
const name1=[];
// for (let i = 0; i < students.length; i++){
//     let str=students[i];
//     name1.push(str);
// }
// console.log(name1);

const new1=students.map(element=>element.name);
console.log(new1);
const new2=students.filter(element=>element.id>40);
console.log(new2);