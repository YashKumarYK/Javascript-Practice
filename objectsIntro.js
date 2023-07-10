console.log("Object Creation");

// factory function
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

// constructor function
function Rectangle( len, bre){
    this.len= len,
    this.bre= bre,
    this.draw= function(){
    console.log("drawing")
  }
};
let r2 = new Rectangle(4,6);
console.log(r2);
