//object destrcturing

const stdobj={
    name: "Naresh",
    age: 30,
    bgrp:"b+"
}
console.log(stdobj);


//Array destructuring 

const fruits=["mango","apple","banana"]
const[fruits1,fruits2,fruits3]=fruits
console.log(fruits1);
console.log(fruits2);

var name= "Naresh"
var age=31

const newobj={
    name:name,
    age:age

}
console.log(newobj);

// Template literals 
// const name1= " Naresh"
// const dept="IT"
// console.log(`the name is${name1} and the department is${dept}`);

// Task 

const new1 =[
{
   name1:"Naresh" ,
   age1:30

},
{
    name1:"Suriya",
    age1:30
}
]
const {name1,age1}=new1[1]
console.log(name1);
console.log(age1);

//forin concept

const obj={
    name:"Naresh",
    batch: "Cypress"

}
for(let m in obj){console.log(m+":"+obj[m])}