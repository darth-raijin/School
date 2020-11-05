class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return console.log(a * b);
  } else {
    throw new MultiplicatorUnitFailure("Oof");
  }
}

function reliableMultiply(a, b) {
  console.log(a + " start " + b);

  try {
    console.log(a + " try " + b);
   return primitiveMultiply(a, b);
  } catch (MultiplicatorUnitFailure) {
    console.log(a + " catch " + b);
     return reliableMultiply(a, b); 
  }
}

console.log(reliableMultiply(8, 8));
