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
