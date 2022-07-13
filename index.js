//Declare a variable.
//var,let,const
var a=4//origin
// let a=4
// const a=4

//let and const were introduced in ES6 (ECMA script)
var b = "Hello world"
//Javascript is dynamically typed language

//System.out.println()
console.log("Value of a is",a)

//Right click-->Inspect--->console

//Print type of a variabe
console.log("Type of a is",typeof a)

console.log("Type of b is",typeof b)

//array
var arr=[]
//no need to give length
//no need to specify data type
//it can be heterogeneous
var array=[1,"hello",7.6]
console.log(array)

//define object
var obj={};

//Every object has key value pair
// var obj={
//     key:Value,
//     key1:value2,
//     key2:value3
// }

var userObj = {
    name:"Rudhir babu",
    city:"Kothagudem",
    age:23,
    profile:"Software developer",
    family:["Mother","Father","Sister","Grandma"],
    dob:"1st sept 1998",
    25:"How are you?"
}

//Keys are seperated by commas
//Value can be of any type
//Keys are always strings or numbers

//Print only one property from object

//Accessing keys
//1. userObj.name --> is only used when key is of type string
//2. userObj["name"] -->is used otherwise

console.log(userObj.name) 
console.log(userObj.city)

console.log(userObj["dob"])
console.log(userObj[25])

//Functions
function foo(){

}

function add(a,b)//function declaration
{
    return a+b;
}
//No need to give return types of arguments
//No return type

var add=function(a,b){//function initialization
    return a+b; //This function without name is anonymous function
}

//Method 3
//Arrow functions
var add=()=>{
    return a+b;
}

var add=()=>a+b;
//No need to write 