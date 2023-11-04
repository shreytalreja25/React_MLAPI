function triangleType(side1, side2, side3) {
  // Your code to determine the type of triangle goes here
  if ((side1 == side2) == side3) {
    return "Equilateral";
  } else if (side1 === side2 || side2 === side3 || side3 === side1) {
    return "Isosceles";
  } else if (side1 !== side2 && side2 !== side3 && side3 !== side1) {
    return "Scalene";
  }
}

const sideA = 5; // Change these values to test different triangles
const sideB = 5;
const sideC = 5;

const type = triangleType(sideA, sideB, sideC);

console.log(`The triangle is ${type}`);
