const { Vector } = require("./lib/vector.js");
const { scalarTripleProduct } = require("./lib/operations.js");
const {
  createVectorObj,
  calcModulus,
  unitVector,
  addVector,
  subVector,
  dotProduct,
} = require("./lib/legacy.js");

module.exports = {
  Vector,
  scalarTripleProduct,
  createVectorObj,
  calcModulus,
  unitVector,
  addVector,
  subVector,
  dotProduct,
};
