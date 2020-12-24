// ES6 Javascript
// VARAIBALE

// let,const,var
// Three ways to define a variable

let num1=4;
const num2=8;
var result=num1+num2;
console.log(result);


// concept of Let

{
    let num1=8;
    console.log(num1);
}

console.log(num1);

// Template Laterals

var firstName='Bilal';
var middleName='Ahmed';
var lastName='Shah';
alert(`My Name is ${firstName} ${middleName} ${lastName}`);


// Terniary Operator


var input=Number(prompt("Enter Number"));

var result= input%2==0?"Number is Even":"Number is odd";
alert(result);



// Arrow function

const add=(a,b,c)=>{
    return a+b+c
}

var a = Number(prompt("Enter Number 1 :"))
var b = Number(prompt("Enter Number 2 :"))
var c = Number(prompt("Enter Number 3 :"))

let resultadd = add(a,b,c);
alert(`Addition of 3 Number is ${resultadd}`);


// Array Methods Map 


let arr1=['Bilal','Ali','Hassan','Ahmed',4];
arr1.map((item)=>console.log(item));

let arr2=[2,4,5,6,7,8];
arr2.map((item)=>alert(item*5));


//Array Filter

let arr3=[2,4,5,6,7,8];
let result=arr3.filter((item)=>item%2==0);
console.log(result)


// Objects

var student1={
    Name:"Bilal",
    Qualification:"Graduate",
    Age:25
}
console.log(student1);
console.log(`Student Name is ${student1.Name}`);
console.log(`Student Qualification is ${student1.Qualification}`);
console.log(`Student Age is ${student1.Age}`);

// Spread Operator ...

var arrone=[4,6,7,8,9,10];
var arrtwo=[14,16,17,18,19,110];

var arrthree=[...arrone,...arrtwo];
console.log(arrthree);
var sum=0;
arrthree.map((item)=>sum+=item);
console.log(sum);


// Destructuring
// Object
var employeedetails1={

    Name:"Bilal",
        Qualification:"Graduate",
        Age:25
}

var{Name,Qualification,Age}=employeedetails1;
console.log(Name);
console.log(Qualification);
console.log(Age);

// Array
var arrdest=[4,6,7,8,9,10];
var [a,b,c,d,e,f]=arrdest;
console.log(f);


// Promises
let a=25;
var promiseVariable=new Promise(
    (resolve,reject)=>{
        a%2==0? resolve('Its Even Number'):reject('Its odd Number')
    }
    
    )

promiseVariable
.then((res)=>console.log(res))
.catch((res)=>console.log(res))



