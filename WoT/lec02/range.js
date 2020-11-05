/*
* Write a range function that takes two arguments, start and end, 
and returns an array containing all the numbers from start up to (and including) end.
*/
let rangeexercise = function(x,y) {
    let foo = []
    for(i = x; i <= y; i++) {
        foo.push(i)
        console.log(i)
    }
    console.log(foo)
}
rangeexercise(2,5)

/*
* Write a sum function that takes an array of numbers and returns the sum of these numbers.
*/
let sumArray = function(x) {
    let result = 0

    for (i in x) {
        result = +result + +i
        console.log(i + " has been added")
    }
    console.log(result)
}
var sumList = [1,2,3,4,5,6,7,8,10, 11, 12]
sumArray(sumList)