
// Spread Operator
console.log('Spread Operator')
const add=(a,b,c,d)=>{return a+b+c+d;}
arr1=[1,2,3,4]
let res=add(...arr1)
console.log(res)


arr2=[5,6]
arr3=[6,7]
console.log(add(...arr2,...arr3))

// copy in spread operator
arr4=[...arr3,...arr2]
console.log(arr4)


// Constructor

console.log('Constructor')
function studentlist (Name,Age,Qualification) {
    this.Name=Name
    this.Age=Age
    this.Qualification=Qualification
}

let student1= new studentlist('Bilal Shah',25,'BS Geophysics')
console.log(student1.Name)
console.log(student1.Age)
console.log(student1.Qualification)

let student2= new studentlist('Imran Abbas',22,'BS Computer Science')
console.log(student2.Name)
console.log(student2.Age)
console.log(student2.Qualification)




// Destructuring
console.log('Destructuring')
let [a1,b1,c1,d1]=[...arr1]
console.log(a1)
console.log(b1)
console.log(c1)
console.log(d1)

let [v1,v2,...v3]=[4,6,8,10,12,14,16,18,20]
console.log(v1)
console.log(v2)
console.log(v3)


const fruits=['grapes','mango','apple']
const [fruit1,fruit2,fruit3]=fruits
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

let n1,n2;
({n1,n2}={n1:"number1 ",n2:"number2 "});
console.log(n1);
console.log(n2);





