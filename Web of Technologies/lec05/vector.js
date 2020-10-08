var Vec = /** @class */ (function () {
    function Vec(x, y) {
        this.x = x;
        this.y = y;
        console.log("X-Coordinate: " + x + " Y-Coordinate: " + y);
    }
    Vec.prototype.plus = function (Vector) {
        var sumVector = new Vec(this.x + Vector.x, this.y + Vector.y);
        console.log("Vector sum = " + sumVector.x + " " + sumVector.y);
    };
    Vec.prototype.minus = function (Vector) {
        console.log(Vector.x);
        var sumVector = new Vec(this.x - Vector.x, this.y - Vector.y);
        console.log("Vector subtracted = " + sumVector.x + " " + sumVector.y);
    };
    Vec.prototype.getlength = function () {
        var sumResult = Math.pow(this.x, 2) + Math.pow(this.y, 2);
        console.log("Length of Vector is " + Math.sqrt(sumResult));
        return Math.sqrt(sumResult);
    };
    return Vec;
}());
var bigVector = new Vec(5, 2);
var smallVector = new Vec(2, 3);
console.log(bigVector.plus(smallVector));
console.log(bigVector.minus(smallVector));
console.log(bigVector.getlength());
