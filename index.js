import { Matrix } from "./lib/matrix.js";

const myMatrix = new Matrix(
  [1, 2, 3],
  [4, 5, 6, 7],
  [8],
  [9, 10, 11, 12],
  [45]
);

console.log("---------------");
console.log("Original matrix");
myMatrix.print();

const transposedMatrix = myMatrix.T;
console.log("---------------");
console.log("Transposed matrix");
transposedMatrix.print();
