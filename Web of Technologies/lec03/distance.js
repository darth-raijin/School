function dist() {
  let distanceArray = [3, 4];
  let numResult = 0;

  for (num of distanceArray) {
    console.log("Current num is: " + num);

    numResult += Math.pow(num, 2);
    console.log(num + " squared " + Math.pow(num, 2));
  }
  let newResult = Math.sqrt(numResult);
  console.log("Distance has been calculated to be: " + newResult);
}

dist();