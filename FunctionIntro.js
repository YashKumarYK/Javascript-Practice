// FUNCTION
// set of codes that do a specific task

console.log("FUNCTIONS");

// Function definition
function intro(){
  console.log("I am a function");
}
intro();

// the function calling can be written baove the function definition and the code will still run successfully. This is called the hoisting.
//HOISTING->Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function

 
//Named Function assignment
let stand = function walk(){
  console.log("walking");
}
stand();

//Anonymous Function Assignment
let stand2 = function(){
  console.log("walking");
}
stand2();

// here hoisting will not occur and if stand() is written above the functionn assingment then it will cause  error
// the reason behind it is that the hoisting only moves function declaration to  top of the current scope, not function assignment.


//NOTE - Functions are dynamic in nature and the error will not come if the num. arguements at the time of calling are not eual the numb. of arguements in the function defintion

function sum(a,b){
  console.log(a+b);
}
sum(1,2); // same number of arguements

sum(); // giving null because a and b is undefined in this case

sum(1,2,3,4,6); // different number of arguements but still running

// what about the extra arguements
// we have a arguement object that willl contains this arguements
function count(){
  let total = 0;
  for(let values of arguments){
    total = total + values;
  }
  return total;
}
 let ans = count(1,2,3,4,5);
console.log(ans); // giving the sum of arguments passed


//REST OPERATOR
function Sum(...args){
  console.log(args);
}

Sum(1,2,3,4,5); // all the parameters are stored in an array named args

//Default Parameter
function interest(p,r=5,y=10){ // r is default parameter
  return p*r*y/100;
}

console.log(interest(1000,10,5));

//getter and setter 
let person = {
  fName : 'Yash',
  lName : 'Kumar',
  get fullName(){
    return `${person.fName} ${person.lName}`; 
  },
  set fullName(value){
    // if(typeof value !==String){
    //   throw new Error("You have not sent a string");
    // }
    let parts = value.split(' ');
    this.fName = parts[0];
    this.lName = parts[1];
   }
};

console.log(person.fullName); // getter called

person.fullName = "Rahul Khan"; // setter called

console.log(person.fullName); 



//Error Handling
Try and Catch
try{
  person.fullName = true;
}
catch(e){
  alert(e);
}
console.log(person.fullName); 
