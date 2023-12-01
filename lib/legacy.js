const { Vector } = require("./vector.js");

// The following are legacy functions and will be deprecated in a future release!

/**
 * Creates a new vector object from an array in the form [i, j, k]. Use Vector class instead
 * @deprecated
 * @see Vector class for implementation details
 * @param {number[]} args
 * @returns {import("./vector.js").VectorObject | undefined}
 */
const createVectorObj = (args) => {
  if (args.length > 3) return undefined;
  return {
    i: args[0] ? args[0] : 0,
    j: args[1] ? args[1] : 0,
    k: args[2] ? args[2] : 0,
  };
};

/**
 * Calculates the modulus/magnitude of a vector. Use Vector class instead
 * @deprecated
 * @see Vector class for implementation details
 * @param {import("./vector.js").VectorObject} vector
 * @returns {number | undefined}
 */
const calcModulus = (vector) => {
  return Math.sqrt(
    Math.pow(vector.i, 2) + Math.pow(vector.j, 2) + Math.pow(vector.k, 2)
  );
};

/**
 * Calculates and returns the unit vector. Use Vector class instead
 * @deprecated
 * @see Vector class for implementation details
 * @param {import("./vector.js").VectorObject} vector
 * @returns {vector | undefined}
 */
const unitVector = (vector) => {
  let size = calcModulus(vector);

  if (size && size > 0) {
    return { i: vector.i / size, j: vector.j / size, k: vector.k / size };
  }
};

/**
 * Takes in an array of vector objects and returns the sum. Use Vector class instead
 * @deprecated
 * @see Vector class for implementation details
 * @param {import("./vector.js").VectorObject[]} vectors
 * @returns {import("./vector.js").VectorObject | undefined}
 */
const addVector = (vectors) => {
  if (vectors.length == 0) {
    return;
  } else if (vectors.length == 1) {
    return vectors[0];
  }

  let v = { i: 0, j: 0, k: 0 };
  for (var n = 0; n < vectors.length; n++) {
    v.i += vectors[n].i;
    v.j += vectors[n].j;
    v.k += vectors[n].k;
  }
  return v;
};

/**
 * Calculates the difference (vector1 - vector2) between two vector objects. Use Vector class instead
 * @deprecated
 * @see Vector class for implementation details
 * @param {import("./vector.js").VectorObject} vA
 * @param {import("./vector.js").VectorObject} vB
 * @returns {import("./vector.js").VectorObject}
 */
const subVector = (vA, vB) => {
  return {
    i: vA.i - vB.i,
    j: vA.j - vB.j,
    k: vA.k - vB.k,
  };
};

/**
 * Calculates the dot product of two vectors. Use Vector class instead
 * @deprecated
 * @see Vector class for implementation details
 * @param {import("./vector.js").VectorObject} vA
 * @param {import("./vector.js").VectorObject} vB
 * @returns {number}
 */
const dotProduct = (vA, vB) => {
  return vA.i * vB.i + vA.j * vB.j + vA.k * vB.k;
};

/**
 * Calculates the cross product of two vectors. Use Vector class instead
 * @deprecated
 * @see Vector class for implementation details
 * @param {import("./vector.js").VectorObject} vA
 * @param {import("./vector.js").VectorObject} vB
 * @returns {import("./vector.js").VectorObject}
 */
const crossProduct = (vA, vB) => {
  return {
    i: vA.j * vB.k - vA.k * vB.j,
    j: vA.k * vB.i - vA.i * vB.k,
    k: vA.i * vB.j - vA.j * vB.i,
  };
};

module.exports = {
  createVectorObj,
  calcModulus,
  unitVector,
  addVector,
  subVector,
  dotProduct,
  crossProduct,
};
