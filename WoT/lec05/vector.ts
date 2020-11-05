class Vec {
    x: number;
    y: number;
    constructor(x, y) {
      this.x = x;
      this.y = y;
  
      console.log("X-Coordinate: " + x + " Y-Coordinate: " + y);
    }
  
    plus(Vector) {
      let sumVector = new Vec(this.x + Vector.x, this.y + Vector.y);
      console.log("Vector sum = " + sumVector.x + " " + sumVector.y);
    }
  
    minus(Vector) {
      console.log(Vector.x);
      let sumVector = new Vec(this.x - Vector.x, this.y - Vector.y);
      console.log("Vector subtracted = " + sumVector.x + " " + sumVector.y);
    }
  
    getlength() {
      let sumResult = Math.pow(this.x, 2) + Math.pow(this.y, 2);
      console.log("Length of Vector is " + Math.sqrt(sumResult));
      return Math.sqrt(sumResult);
    }
  }
  
  var bigVector = new Vec(5, 2);
  var smallVector = new Vec(2, 3);
  
  console.log(bigVector.plus(smallVector));
  console.log(bigVector.minus(smallVector));
  
  console.log(bigVector.getlength());
  