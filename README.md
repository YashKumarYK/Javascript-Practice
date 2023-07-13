# Javascript-Practice
**Javascript Basics and practice**

**Types**  
1. Primitive types -> Numbers, Booleans, String, NULL, Undefined, Symbol
2. Reference Types -> functions, array, objects

**Difference between Primitive and Reference type:**  
_Primitive types are copied by their values and reference types are copied by their address/references._

## OBJECT
There are two ways of creating an object:  
**1.Factory function**
```
function createRectangle(len, bre){
  let rectangle = {
    length: 2,
    breadth: 10,
    draw: function(){
      console.log("draw")
    }
  };
  return rectangle;
};
let r1 = createRectangle(2,3);
console.log(r1);
```  
**2.Constructor Function**
```
function Rectangle( len, bre){
    this.len= len,
    this.bre= bre,
    this.draw= function(){
    console.log("drawing")
  }
};
let r2 = new Rectangle(4,6);
console.log(r2);   
```

### OBJECT CLONING  
The object cloning is a way to create an exact copy of an object.  
There are three ways to clone the object.
1. Iteration
2. Assign
3. Spread  

Let's make an object
```
function Rectangle(len, bre){
  this.length = len;
  this.breadth= bre;
  this.draw= function(){
    console.log("Drawing");
  }
};

let R1 = new Rectangle(2, 3);
console.log(R1);

let R2 = R1;
R2.length = 1;
console.log(R1);
```
The values got changed because we didn't copy the values of R1 to R2, instead of copying the values, we copied the address of R1, and then R2 points to the same address;


```
let R = new Rectangle(4,5);
```  
**OBJECT CLONING #1 - ITERATION**
```
let R3 ={};
for( let key in R){
  R3[key] = R[key];
}
```


**OBJECT CLONING #2 - ASSIGN**
```
let R4 = Object.assign({},R);
```


**OBJECT CLONING #3 - Spread**
```
let R5 = {...R};
```

## ARRAY    
_In JS , array can contain element of different kind also._  
Creation of  Array  
```
let arr = [ 1, 2,'a','b', 5,6];
```

**INSERTION**  
1.To the end
```
arr.push('v');
```


2.To the beginning
```
arr.unshift(0);
```

3.To the middle of the array
```
arr.splice(2, 0, 'y','a', 's', 'h');
arr.splice(2, 1 , 'y','a', 's', 'h');
```

**SEARCHING**  
Use indexOf(element)  
```
console.log(arr.indexOf(1)); // returns 1
console.log(arr.indexOf(10)); // return -1
```

we want to check if a number exists in an array  
```
if(arr.indexOf(4)!= -1){
  console.lo;g("Present");
}
```
```
console.log(arr.indexOf(2, 1)); // search will get start from index 1
```
**NOTE : indexOf method is only aplicable for the primitive types. if we make an array of objects and do the same, it will return -1 instead of returning the index of the object**  
```
let courses = [
  {no:1, name:'Yash'},
    {no:2, name:'kumar'}
];
console.log(courses.indexOf({no:1, name:'Yash'}));
```
It will print -1 instead of printing the index.  
**Why's that**: Because the object written inside the courses array and the object written inside the indexOf function is different , althought they look same  

**Note:for searching the objects in an array, we use callback functions**  


**what is Callback functions:**  
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

**searching using callback function**  
```
let course = courses.find(function(course){
  return course.name === 'Yash';
});
console.log(course); // now it is return that object which we had to find
```
  
also be written in one line using arrow function
```
let course1 = courses.find(course=>course.name === 'Yash');
console.log(course1);
```

**DELETING FROM ARRAY**
```
let newArr = [1,2,3,4,5];
console.log(newArr)
// remove from the end 
newArr.pop();
console.log(newArr);

//remove from the start
newArr.shift();
console.log(newArr);

 //remove from the middle
newArr.splice(2,1);
console.log(newArr);
```

**EMPTYING AN ARRAY**  
```
let number = [1,2,3,4,5];
let number1 = number;
number = [];
```  
this way we cannot make an array empty because it is of refeerce type, this way the number will just point to the empty array, but the previous values are not deleted.
```
console.log(number);
console.log(number1); // see it will still show those values
```
**best way to empty the array**
```
number.length = 0;

// we can use slice method also
number.splice(0, number.length);
```

**COMBINING AND SLICING THE ARRAY**   
For combining - use concat function
```
console.log("Combining and Slicing Array");
let first = [1,2,3];
let second = [4,5,6];

let third = first.concat(second);
```  
For mode readability we can use spreead operator to combine.  
```
let third = [...first, ...second];
```
**Slicing**  
```
let sliced = third.slice(2, 5);
```

**JOINING AND SPLITTING THE ARRAY**  
```
let nums = [1,2,3,4,5,6];
let joined = nums.join(',');
```

**splitting**
```
let message = 'My Name is Yash';
let splitParts = message.split(' ');
```


**SORTING**  
```
arr = [12,5,2,67,2];
arr.sort();
```

**NOTE: sort() function internally changes the every element in the string and then sort it; if want to sort accoridn to integers , then use predicate/callback function. For the objects, sorting is done using predicate/callback function.**  


**FILTERING THE ARRAY**  
FILTERING IS DONE USING CALLBACK FUNCTION
```
nums = [1,2,-1,-4];
let filtered = nums.filter(value=> value>0 );
```

**MAPPING IN ARRAY**  
```
numbers = [1,2,3,5,6];

let mapp = numbers.map(function(num){
  return {value:num};
});
console.log(mapp);
```
